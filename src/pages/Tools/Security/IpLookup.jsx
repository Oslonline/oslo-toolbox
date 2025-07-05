import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/Faq";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";

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

  return (
    <>
      <Helmet>
        <title>IP Lookup Tool - Free IP Address Information | Oslo Toolbox</title>
        <meta name="description" content="Lookup IP address information for free. Get location, ISP, ASN, and more for any IPv4 or IPv6 address with Oslo Toolbox." />
        <meta name="keywords" content="ip lookup, ip address, ip geolocation, free ip lookup, ipv4, ipv6, isp, asn, oslo toolbox" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Security/Ip-lookup" />
        <meta property="og:title" content="IP Lookup Tool - Oslo Toolbox" />
        <meta property="og:description" content="Lookup IP address information for free. Get location, ISP, ASN, and more for any IPv4 or IPv6 address." />
        <meta property="og:url" content="https://oslo-toolbox.vercel.app/Security/Ip-lookup" />
        <meta name="twitter:title" content="IP Lookup Tool - Oslo Toolbox" />
        <meta name="twitter:description" content="Lookup IP address information for free. Get location, ISP, ASN, and more for any IPv4 or IPv6 address." />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col rounded-lg border-2 p-4 md:p-6">
        <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between md:gap-4">
          <input type="text" className="dark:border-border-dark focus:border-accent dark:bg-dark bg-light border-border-light w-full rounded-md border-2 p-2 outline-hidden" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Enter IPv4 or IPv6 address" aria-label="IP address" />
          <ButtonMainCta onClick={getInfos} aria-label="Lookup IP address">
            Lookup
          </ButtonMainCta>
        </div>
        {error && <div className="mt-2 text-red-500">{error}</div>}
        {result && (
          <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light mt-4 rounded-md border-2 p-4">
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

      <FAQSection />
    </>
  );
}
