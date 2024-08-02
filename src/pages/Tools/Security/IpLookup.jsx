import React, { useState } from "react";
import axios from "axios";

export default function IpLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getInfos = () => {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!ipPattern.test(ip)) {
      setError("Please enter a valid IP address.");
      return;
    }

    setError("");

    axios
      .get(`https://ipapi.co/${ip}/json/`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching IP information:", error);
        setError("Could not fetch IP information. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p className="text-gray-500">Lookup infos from IP address for free, enter the IP address, press lookup and it's done!</p>
      </div>
      <div className="flex flex-col gap-2 rounded-md border-2 border-gray-200 p-4">
        <div className="w-full flex justify-between">
          <input type="text" className="rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 focus:outline-offset-0" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="IP address" />
          <button onClick={getInfos} className="rounded-md bg-orange-400 px-4 py-2 text-gray-50 duration-200 hover:bg-orange-600">
            Lookup
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
      {result && (
        <div className="mt-4 rounded-md border-2 border-gray-200 p-4">
          <p>
            <strong>IP:</strong> {result.ip}
          </p>
          <p>
            <strong>City:</strong> {result.city}
          </p>
          <p>
            <strong>Region:</strong> {result.region}
          </p>
          <p>
            <strong>Country:</strong> {result.country_name}
          </p>
          <p>
            <strong>ISP:</strong> {result.org}
          </p>
          <p>
            <strong>Latitude:</strong> {result.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {result.longitude}
          </p>
          <p>
            <strong>ASN:</strong> {result.asn}
          </p>
        </div>
      )}
    </div>
  );
}
