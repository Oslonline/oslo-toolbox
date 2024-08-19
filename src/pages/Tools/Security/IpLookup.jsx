import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function IpLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const isValidIP = (ip) => {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
  };

  const getInfos = async () => {
    if (!isValidIP(ip)) {
      setError("Please enter a valid IPv4 address.");
      return;
    }

    setError("");

    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching IP information:", error);
      setError("Could not fetch IP information. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>IP Lookup Tool - Get IP Address Information | Oslo Toolbox</title>
        <meta name="description" content="Use our IP Lookup tool to get detailed information about an IP address, including location, ISP, and more. Enter an IP address to see the results." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Security/IpLookup" />
      </Helmet>

      <p className="text-gray-500">Use our free IP Lookup tool to retrieve information about any IP address. Find out the geographical location, ISP, and other details related to the IP address. Just enter the IPv4 address and click "Lookup" to get started.</p>
      <div className="flex flex-col rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6">
        <div className="flex flex-col gap-2 rounded-md border-2 border-gray-200 bg-white p-4">
          <div className="flex w-full flex-col gap-2 md:gap-8 md:flex-row">
            <input type="text" className="flex rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Enter IPv4 address" aria-label="IP address" />
            <button onClick={getInfos} className="rounded-md bg-orange-400 px-4 py-2 text-gray-50 duration-200 hover:bg-orange-600" aria-label="Lookup IP address">
              Lookup
            </button>
          </div>
          {error && <div className="mt-2 text-red-500">{error}</div>}
        </div>

        {result && (
          <div className="mt-4 rounded-md border-2 border-gray-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-800">IP Information</h2>
            <p>
              <strong>IP:</strong> {result.ip}
            </p>
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
        )}
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900">What is IP Lookup?</h3>
          <p className="text-gray-600">IP Lookup is a tool that allows you to find information about an IP address. This includes details like the geographical location, ISP, and other relevant data associated with the IP address.</p>
          <h3 className="mt-4 font-semibold text-gray-900">How do I use this tool?</h3>
          <p className="text-gray-600">Simply enter the IP address you want to look up in the input field and click "Lookup". The tool will fetch and display information about the IP address.</p>
          <h3 className="mt-4 font-semibold text-gray-900">What kind of information can I get from an IP lookup?</h3>
          <p className="text-gray-600">The IP Lookup tool provides details such as the IP address, city, region, country, ISP, latitude, longitude, and ASN (Autonomous System Number).</p>
          <h3 className="mt-4 font-semibold text-gray-900">Can I use this tool for IPv6 addresses?</h3>
          <p className="text-gray-600">Currently, this tool supports IPv4 addresses. IPv6 support may be added in future updates.</p>
          <h3 className="mt-4 font-semibold text-gray-900">What should I do if I receive an error?</h3>
          <p className="text-gray-600">If you encounter an error, please make sure the IP address is correctly formatted. If the problem persists, try again later or contact support for assistance.</p>
        </div>
      </div>
    </div>
  );
}
