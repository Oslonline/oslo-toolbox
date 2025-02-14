import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/commons/Faq";

export default function IpLookup() {
  const [ip, setIp] = useState("");
  const [ipv4, setIpv4] = useState("");
  const [ipv6, setIpv6] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const isValidIP = (ip) => {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Pattern =
      /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|(([0-9a-fA-F]{1,4}:){1,6}:([0-9a-fA-F]{1,4}|:))|(::([0-9a-fA-F]{1,4}:){1,7}|:)|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})$/i;
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
  };

  const getInfos = async () => {
    if (!isValidIP(ip)) {
      setError("Please enter a valid IPv4 or IPv6 address.");
      return;
    }

    setError("");

    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      setResult(response.data);
      if (response.data.ip) {
        if (isValidIP(response.data.ip)) {
          if (response.data.ip.includes(":")) {
            setIpv6(response.data.ip);
          } else {
            setIpv4(response.data.ip);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching IP information:", error);
      setError("Could not fetch IP information. Please try again later.");
    }
  };

  const faqData = [
    {
      question: "What is IP Lookup?",
      answer: "IP Lookup is a tool that allows you to find information about an IP address. This includes details like the geographical location, ISP, and other relevant data associated with the IP address.",
    },
    {
      question: "How do I use this tool?",
      answer: "Simply enter the IP address you want to look up in the input field and click 'Lookup'. The tool will fetch and display information about the IP address.",
    },
    {
      question: "What kind of information can I get from an IP lookup?",
      answer: "The IP Lookup tool provides details such as the IP address, city, region, country, ISP, latitude, longitude, and ASN (Autonomous System Number).",
    },
    {
      question: "Can I use this tool for IPv6 addresses?",
      answer: "Currently, this tool supports IPv4 addresses. IPv6 support may be added in future updates.",
    },
    {
      question: "What should I do if I receive an error?",
      answer: "If you encounter an error, please make sure the IP address is correctly formatted. If the problem persists, try again later or contact support for assistance.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>IP Lookup Tool - Get IP Address Information | Oslo Toolbox</title>
        <meta name="description" content="Use our IP Lookup tool to get detailed information about an IP address, including location, ISP, and more. Enter an IP address to see the results." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Security/IpLookup" />
      </Helmet>

      <p className="text-gray-600 dark:text-gray-400">Use our free IP Lookup tool to retrieve information about any IP address. Find out the geographical location, ISP, and other details related to the IP address. Just enter the IPv4 address and click "Lookup" to get started.</p>
      <div className="flex flex-col rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex flex-col gap-2 rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between md:gap-4">
            <input
              type="text"
              className="flex rounded-md border-2 border-gray-200 bg-white px-2 py-1.5 caret-orange-400 outline-hidden focus:border-orange-400 md:w-full dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:caret-orange-600 dark:focus:border-orange-600"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="Enter IPv4 or IPv6 address"
              aria-label="IP address"
            />
            <button onClick={getInfos} className="rounded-md bg-orange-400  px-4 py-1.5 text-gray-50 duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200" aria-label="Lookup IP address">
              Lookup
            </button>
          </div>
          {error && <div className="mt-2 text-red-500">{error}</div>}
        </div>

        {result && (
          <div className="mt-4 rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">IP Informations</h2>
            <div className="dark:text-gray-300">
              {ipv4 && (
                <p>
                  <strong>IPv4:</strong> {ipv4}
                </p>
              )}
              {ipv6 && (
                <p>
                  <strong>IPv6:</strong> {ipv6}
                </p>
              )}
              <p>
                <strong>City:</strong> {result.city || "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {result.region || "N/A"}
              </p>
              <p>
                <strong>Country:</strong> {result.country_name || "N/A"}
              </p>
              <p>
                <strong>ISP:</strong> {result.org || "N/A"}
              </p>
              <p>
                <strong>Latitude:</strong> {result.latitude || "N/A"}
              </p>
              <p>
                <strong>Longitude:</strong> {result.longitude || "N/A"}
              </p>
              <p>
                <strong>ASN:</strong> {result.asn || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
      <FAQSection faqs={faqData} />
    </div>
  );
}
