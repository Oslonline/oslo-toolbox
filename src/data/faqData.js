const faqData = [
  {
    path: "/",
    faqs: [
      {
        question: "What free online tools does Oslo's Toolbox offer for developers and designers?",
        answer:
          "Oslo's Toolbox provides a wide range of free online tools for developers and designers, including CSS gradient and shadow generators, unit converters (length, mass, area, volume, temperature), secure password generators, QR code creators, IP lookup, hash generators, and advanced image editing tools like image converters, dithering, noise, and blur effects.",
        keywords: ["free online tools", "developer tools", "designer tools", "CSS generators", "unit converters", "password generators", "QR code generator", "image editing tools", "hash generator", "IP lookup"],
      },
      {
        question: "Is Oslo's Toolbox really free to use? Are there any hidden costs?",
        answer: "Yes, every tool on Oslo's Toolbox is 100% free to use. There are no hidden fees, subscriptions, or paywalls—just instant access to all features for everyone.",
        keywords: ["free tools", "no hidden costs", "no subscription", "free developer tools", "free design tools"],
      },
      {
        question: "Do I need to create an account or sign up to use Oslo's Toolbox?",
        answer: "No account or registration is required. All tools are available instantly—just visit the site and start using any tool without logging in.",
        keywords: ["no sign up", "no registration", "use tools without account", "instant access"],
      },
      {
        question: "How often are new tools and features added to Oslo's Toolbox?",
        answer: "We regularly add new tools and update existing ones based on user feedback and the latest trends in web development and design. Check back often or follow us for updates on the newest features.",
        keywords: ["new tools", "feature updates", "toolbox updates", "web development tools", "design tool updates"],
      },
      {
        question: "Can I suggest a tool or feature for Oslo's Toolbox?",
        answer: "Absolutely! We welcome suggestions from the community. If you have an idea for a new tool or feature, contact us and we'll consider adding it in a future update.",
        keywords: ["suggest a tool", "feature request", "community feedback", "toolbox suggestions"],
      },
    ],
  },
  {
    path: "/Generators/Lorem",
    faqs: [
      {
        question: "What is Lorem Ipsum and why do designers use it?",
        answer: "Lorem Ipsum is placeholder text used by designers and developers to visualize layouts without being distracted by actual content. It's derived from classical Latin literature and helps focus on design elements like typography, spacing, and layout structure.",
        keywords: ["Lorem Ipsum", "placeholder text", "designers", "layout visualization", "typography", "design elements"],
      },
      {
        question: "How do I generate Lorem Ipsum text for my website?",
        answer: "Simply use our Lorem Ipsum generator to create placeholder text for your website or design project. Choose the number of paragraphs or words you need, and copy the generated text to use in your layouts.",
        keywords: ["generate Lorem Ipsum", "website placeholder", "design project", "paragraphs", "words"],
      },
      {
        question: "Can I use Lorem Ipsum in my final published content?",
        answer: "No, Lorem Ipsum should only be used for design and development purposes. Always replace it with real, meaningful content before publishing your website or document.",
        keywords: ["published content", "real content", "website publishing", "meaningful content"],
      },
      {
        question: "What's the difference between Lorem Ipsum and other placeholder text?",
        answer: "Lorem Ipsum is the industry standard placeholder text that looks natural and readable. Unlike random text, it has proper word length distribution and doesn't distract from design decisions.",
        keywords: ["placeholder text comparison", "industry standard", "natural text", "design decisions"],
      },
    ],
  },
  {
    path: "/Generators/Password",
    faqs: [
      {
        question: "How do I create a strong password that's hard to hack?",
        answer: "Use our password generator to create strong passwords with at least 12 characters, including uppercase and lowercase letters, numbers, and special characters. Avoid common words or patterns that hackers can easily guess.",
        keywords: ["strong password", "password security", "hack prevention", "special characters", "password generator"],
      },
      {
        question: "What makes a password secure and unbreakable?",
        answer: "A secure password should be long (12+ characters), random, and include a mix of letters, numbers, and symbols. Avoid personal information like birthdays or names that hackers can easily find online.",
        keywords: ["secure password", "unbreakable password", "random password", "personal information", "password security"],
      },
      {
        question: "How often should I change my passwords to stay safe?",
        answer: "Change your passwords every 3-6 months, and immediately if you suspect a security breach. Use unique passwords for each account to prevent hackers from accessing multiple accounts if one is compromised.",
        keywords: ["password change frequency", "security breach", "unique passwords", "account protection"],
      },
      {
        question: "Should I use a password manager for better security?",
        answer: "Yes, password managers are highly recommended. They generate and store strong, unique passwords for each account, encrypt your data, and help you avoid the security risks of reusing passwords across multiple sites.",
        keywords: ["password manager", "better security", "unique passwords", "encrypted data", "password reuse"],
      },
      {
        question: "What are the most common password mistakes to avoid?",
        answer: "Avoid using personal information, common words, sequential numbers, or the same password for multiple accounts. Never share passwords or write them down where others can find them.",
        keywords: ["password mistakes", "personal information", "common words", "password sharing", "security risks"],
      },
    ],
  },
  {
    path: "/Generators/QrCode",
    faqs: [
      {
        question: "How do I create a QR code for my business or website?",
        answer: "Use our free QR code generator to create custom QR codes for your business. Enter your website URL, contact information, or any text, customize the colors to match your brand, and download the QR code for use in marketing materials.",
        keywords: ["create QR code", "business QR code", "website QR code", "custom QR code", "marketing materials"],
      },
      {
        question: "What can I put in a QR code besides a website link?",
        answer: "QR codes can store contact information, Wi-Fi passwords, phone numbers, email addresses, text messages, and even payment information. They're versatile tools for sharing any type of data quickly.",
        keywords: ["QR code content", "contact information", "Wi-Fi passwords", "phone numbers", "payment information"],
      },
      {
        question: "How do I customize my QR code colors and design?",
        answer: "Our QR code generator allows you to change colors, add your logo, and customize the design to match your brand. Choose from various color options and ensure the QR code remains scannable for best results.",
        keywords: ["customize QR code", "QR code colors", "QR code design", "brand matching", "scannable QR code"],
      },
      {
        question: "Are QR codes safe to scan? What security risks should I know?",
        answer: "QR codes themselves are safe, but always verify the destination before scanning. Be cautious of QR codes from unknown sources, as they could lead to malicious websites or phishing attempts.",
        keywords: ["QR code safety", "security risks", "malicious websites", "phishing attempts", "scanning safety"],
      },
      {
        question: "How do I track QR code scans and measure their effectiveness?",
        answer: "Use URL shorteners with analytics or QR code services that provide tracking features. This helps you measure engagement, track conversions, and understand how your QR codes are performing in marketing campaigns.",
        keywords: ["QR code tracking", "scan analytics", "engagement measurement", "marketing campaigns", "conversion tracking"],
      },
    ],
  },
  {
    path: "/Generators/Readme",
    faqs: [
      {
        question: "How do I write a professional GitHub README that attracts contributors?",
        answer: "Use our README generator to create a comprehensive README with clear project description, installation instructions, usage examples, and contribution guidelines. Include badges, screenshots, and links to make your project stand out.",
        keywords: ["professional README", "GitHub README", "attract contributors", "project description", "installation instructions"],
      },
      {
        question: "What sections should I include in my GitHub README file?",
        answer: "Essential sections include project title, description, installation steps, usage examples, API documentation, contributing guidelines, license information, and contact details. Our generator helps you create all these sections easily.",
        keywords: ["README sections", "GitHub README", "project documentation", "contributing guidelines", "license information"],
      },
      {
        question: "How do I make my README stand out from other projects?",
        answer: "Include high-quality screenshots, GIFs, or videos demonstrating your project. Add badges for build status, code coverage, and downloads. Write clear, engaging descriptions and provide comprehensive documentation.",
        keywords: ["standout README", "project screenshots", "README badges", "engaging descriptions", "comprehensive documentation"],
      },
      {
        question: "What's the difference between Markdown and regular text in README files?",
        answer: "Markdown is a lightweight markup language that adds formatting to plain text. It allows you to create headings, lists, code blocks, links, and images in your README, making it more readable and professional-looking than plain text.",
        keywords: ["Markdown vs text", "README formatting", "code blocks", "professional README", "readable documentation"],
      },
      {
        question: "How do I add images and screenshots to my GitHub README?",
        answer: "Upload images to your repository and reference them using Markdown syntax: ![Alt text](path/to/image.png). For screenshots, use tools like Lightshot or Snipping Tool, then add them to showcase your project's features.",
        keywords: ["README images", "screenshots", "Markdown syntax", "project showcase", "feature demonstration"],
      },
    ],
  },
  // CSS TOOLS
  {
    path: "/Css/Box-shadow",
    faqs: [
      {
        question: "How do I create a beautiful box shadow effect in CSS?",
        answer: "Use our CSS box-shadow generator to create stunning shadow effects. Adjust the horizontal and vertical offset, blur radius, spread radius, and color to achieve the perfect depth and visual appeal for your web elements.",
        keywords: ["beautiful box shadow", "CSS shadow effects", "depth creation", "visual appeal", "shadow generator"],
      },
      {
        question: "What are the best box-shadow values for a modern design?",
        answer: "For modern designs, try subtle shadows with 0px horizontal offset, 2-8px blur radius, and low opacity. Material Design uses 0px horizontal offset with 2-24px blur. Experiment with our generator to find your perfect shadow.",
        keywords: ["modern box shadow", "Material Design shadows", "subtle shadows", "design trends", "shadow values"],
      },
      {
        question: "How do I create an inset shadow effect in CSS?",
        answer: "Add the 'inset' keyword to your box-shadow property to create an inner shadow effect. This makes the shadow appear inside the element, creating a pressed or recessed appearance perfect for buttons and form elements.",
        keywords: ["inset shadow", "inner shadow", "pressed effect", "recessed appearance", "button shadows"],
      },
      {
        question: "Can I use multiple box-shadows on the same element?",
        answer: "Yes! Separate multiple shadows with commas to create complex effects. Layer different shadows to achieve depth, borders, or special effects. Our generator makes it easy to experiment with multiple shadow combinations.",
        keywords: ["multiple box shadows", "layered shadows", "complex effects", "shadow combinations", "depth creation"],
      },
      {
        question: "How do I make my box-shadow work on all browsers?",
        answer: "Our CSS generator creates cross-browser compatible code. For older browsers, consider adding vendor prefixes or fallbacks. The generated code works on all modern browsers including Chrome, Firefox, Safari, and Edge.",
        keywords: ["cross-browser compatibility", "vendor prefixes", "browser support", "modern browsers", "CSS compatibility"],
      },
    ],
  },
  {
    path: "/Css/Gradient",
    faqs: [
      {
        question: "How do I create a beautiful gradient background in CSS?",
        answer: "Use our CSS gradient generator to create stunning gradient backgrounds. Choose between linear, radial, or conic gradients, pick your colors, adjust the angle, and copy the generated CSS code to your stylesheet.",
        keywords: ["beautiful gradient background", "CSS gradient generator", "linear gradients", "radial gradients", "gradient backgrounds"],
      },
      {
        question: "What's the difference between linear and radial gradients?",
        answer: "Linear gradients transition colors along a straight line (horizontal, vertical, or diagonal), while radial gradients spread colors outward from a center point in a circular pattern. Linear gradients are great for backgrounds, while radial gradients create spotlight effects.",
        keywords: ["linear vs radial gradients", "gradient types", "straight line transitions", "circular patterns", "spotlight effects"],
      },
      {
        question: "How do I create a gradient text effect in CSS?",
        answer: "Apply a gradient to text using background-clip: text and color: transparent. Our generator can help you create the perfect gradient, then you can apply it to text elements for stunning visual effects.",
        keywords: ["gradient text effect", "background-clip text", "transparent text", "gradient typography", "visual effects"],
      },
      {
        question: "What are the best gradient color combinations for websites?",
        answer: "Popular combinations include blue to purple, orange to pink, green to blue, and warm to cool transitions. Use complementary colors or monochromatic schemes. Our generator includes preset color combinations for inspiration.",
        keywords: ["gradient color combinations", "website gradients", "complementary colors", "monochromatic schemes", "gradient inspiration"],
      },
      {
        question: "How do I make my gradients responsive and mobile-friendly?",
        answer: "Use viewport units or percentage-based gradients that adapt to screen size. Our generator creates responsive-friendly code. Test your gradients on different devices to ensure they look great everywhere.",
        keywords: ["responsive gradients", "mobile-friendly gradients", "viewport units", "screen adaptation", "gradient testing"],
      },
    ],
  },
  // SECURITY TOOLS
  {
    path: "/Security/Hash",
    faqs: [
      {
        question: "How do I create a secure hash for password storage?",
        answer: "Use SHA-256 or SHA-512 algorithms with a cryptographic salt for maximum security. Our hash generator supports multiple algorithms. Never use MD5 for passwords as it's vulnerable to attacks. Always salt your hashes to prevent rainbow table attacks.",
        keywords: ["secure hash", "password storage", "SHA-256", "SHA-512", "cryptographic salt", "rainbow table attacks"],
      },
      {
        question: "What's the difference between MD5, SHA-1, and SHA-256?",
        answer: "MD5 is fast but insecure due to vulnerabilities. SHA-1 is older and also vulnerable. SHA-256 and SHA-512 are modern, secure algorithms recommended for sensitive data. SHA-512 is stronger but slower than SHA-256.",
        keywords: ["MD5 vs SHA", "hash algorithm comparison", "security vulnerabilities", "SHA-256", "SHA-512"],
      },
      {
        question: "Can I decrypt or reverse a hash back to the original text?",
        answer: "No, hashing is a one-way process. Once data is hashed, it cannot be reversed to retrieve the original text. This makes hashing perfect for password storage and data integrity verification.",
        keywords: ["hash decryption", "one-way process", "password storage", "data integrity", "hash reversal"],
      },
      {
        question: "How do I verify if two files have the same hash?",
        answer: "Generate hashes for both files using the same algorithm. If the hash values match, the files are identical. This is useful for verifying file integrity, detecting corruption, or ensuring downloads are complete.",
        keywords: ["file hash verification", "identical files", "file integrity", "corruption detection", "download verification"],
      },
      {
        question: "What is a rainbow table attack and how do I prevent it?",
        answer: "Rainbow tables are precomputed hash tables used to crack passwords. Prevent them by using cryptographic salts - random data added to passwords before hashing. This ensures identical passwords produce different hashes.",
        keywords: ["rainbow table attack", "password cracking", "cryptographic salt", "hash security", "attack prevention"],
      },
    ],
  },
  {
    path: "/Security/Ip-lookup",
    faqs: [
      {
        question: "How do I find the location of an IP address?",
        answer: "Use our IP lookup tool to find the geographical location of any IP address. Enter the IP address and get detailed information including country, city, ISP, latitude, longitude, and more. Perfect for security analysis and network troubleshooting.",
        keywords: ["IP address location", "geographical location", "IP lookup tool", "security analysis", "network troubleshooting"],
      },
      {
        question: "What information can I get from an IP address lookup?",
        answer: "Our IP lookup provides country, region, city, ISP name, latitude/longitude coordinates, timezone, ASN (Autonomous System Number), and connection type. This helps identify the origin and characteristics of network traffic.",
        keywords: ["IP lookup information", "ISP details", "geographical data", "network characteristics", "traffic analysis"],
      },
      {
        question: "How do I check if an IP address is from a VPN or proxy?",
        answer: "Look for signs like data center ISPs, hosting providers, or VPN services in the ISP field. Some IP lookup services also flag known VPN/proxy IPs. This helps identify potentially suspicious or anonymous connections.",
        keywords: ["VPN detection", "proxy detection", "anonymous IP", "suspicious connections", "ISP analysis"],
      },
      {
        question: "Can I use IP lookup for cybersecurity and threat detection?",
        answer: "Yes, IP lookup is essential for cybersecurity. Identify suspicious login attempts, track attack sources, verify user locations, and detect unusual network activity. Combine with other security tools for comprehensive threat detection.",
        keywords: ["cybersecurity", "threat detection", "suspicious activity", "attack tracking", "security monitoring"],
      },
      {
        question: "How accurate is IP geolocation data?",
        answer: "IP geolocation accuracy varies by location and ISP. Urban areas are typically more accurate (city-level) while rural areas may only show country/region. ISP data is usually very accurate. For critical applications, consider additional verification methods.",
        keywords: ["IP geolocation accuracy", "location precision", "ISP accuracy", "verification methods", "geolocation reliability"],
      },
    ],
  },
  {
    path: "/Security/Uuid",
    faqs: [
      {
        question: "How do I generate a unique identifier for my database?",
        answer: "Use our UUID generator to create unique identifiers for your database records. Choose between UUID v1 (time-based) or v4 (random). UUIDs are perfect for distributed systems and prevent ID conflicts when merging data from different sources.",
        keywords: ["unique identifier", "database UUID", "distributed systems", "ID conflicts", "data merging"],
      },
      {
        question: "What's the difference between UUID v1 and v4?",
        answer: "UUID v1 uses timestamp and MAC address for uniqueness, making it time-ordered and traceable. UUID v4 is randomly generated, providing better privacy and unpredictability. Choose v1 for ordered data, v4 for security-sensitive applications.",
        keywords: ["UUID v1 vs v4", "time-ordered UUID", "random UUID", "privacy", "security applications"],
      },
      {
        question: "Are UUIDs really unique? What are the chances of collision?",
        answer: "UUIDs are designed to be unique, with collision probability being extremely low (1 in 2^122 for v4). For most applications, this is effectively zero. However, for critical systems, consider additional uniqueness checks or use sequential IDs.",
        keywords: ["UUID uniqueness", "collision probability", "critical systems", "uniqueness checks", "sequential IDs"],
      },
      {
        question: "How do I use UUIDs in URLs and web applications?",
        answer: "UUIDs are URL-safe and perfect for web applications. Use them as resource identifiers, session tokens, or API keys. They're more secure than sequential IDs since they don't reveal information about your data structure or user count.",
        keywords: ["UUID in URLs", "web applications", "resource identifiers", "session tokens", "API keys"],
      },
      {
        question: "Can I use UUIDs for primary keys in my database?",
        answer: "Yes, UUIDs work well as primary keys, especially in distributed databases. They prevent conflicts when merging data and don't require coordination between servers. However, they use more storage than integers and may impact query performance on large datasets.",
        keywords: ["UUID primary keys", "distributed databases", "data conflicts", "storage impact", "query performance"],
      },
    ],
  },
  // UNITS CONVERTERS
  {
    path: "/UnitsConvert/Length",
    faqs: [
      {
        question: "How do I convert between metric and imperial length units?",
        answer: "Use our length converter to switch between metric (meters, centimeters, kilometers) and imperial (feet, inches, miles) units. Simply enter your value, select the units you're converting from and to, and get instant, accurate results.",
        keywords: ["metric to imperial", "length conversion", "meters to feet", "centimeters to inches", "kilometers to miles"],
      },
      {
        question: "What's the difference between metric and imperial measurement systems?",
        answer: "Metric system uses base-10 units (meters, grams, liters) and is used worldwide. Imperial system uses feet, pounds, gallons and is primarily used in the US. Our converter helps you switch between both systems easily.",
        keywords: ["metric vs imperial", "measurement systems", "base-10 units", "worldwide usage", "US measurements"],
      },
      {
        question: "How accurate are the length conversion calculations?",
        answer: "Our conversions use internationally recognized standards and are highly accurate. For critical applications like engineering or construction, we recommend double-checking with official conversion tables or standards.",
        keywords: ["conversion accuracy", "international standards", "critical applications", "engineering", "construction"],
      },
      {
        question: "Can I convert unusual or historical length units?",
        answer: "Our converter includes many historical and regional units like fathoms, rods, and chains. If you need a unit not listed, contact us and we may add it based on user demand and available conversion factors.",
        keywords: ["historical units", "regional units", "fathoms", "rods", "chains", "conversion factors"],
      },
      {
        question: "How do I convert measurements for international projects?",
        answer: "Use our converter to ensure consistency across international projects. Convert all measurements to a common system (usually metric) for documentation, or provide measurements in both systems for clarity.",
        keywords: ["international projects", "measurement consistency", "common system", "documentation", "clarity"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Mass",
    faqs: [
      {
        question: "How do I convert between pounds and kilograms?",
        answer: "Use our mass converter to switch between pounds (imperial) and kilograms (metric). 1 kilogram equals approximately 2.2046 pounds. Our tool provides precise conversions for cooking, shipping, and scientific applications.",
        keywords: ["pounds to kilograms", "mass conversion", "cooking measurements", "shipping weights", "scientific applications"],
      },
      {
        question: "What's the difference between mass and weight?",
        answer: "Mass is the amount of matter in an object (measured in kg, lbs), while weight is the force of gravity on that mass (measured in newtons). Mass stays constant, but weight changes with gravity. Our converter handles mass units.",
        keywords: ["mass vs weight", "matter amount", "gravity force", "constant mass", "changing weight"],
      },
      {
        question: "How do I convert cooking measurements like ounces and grams?",
        answer: "Use our mass converter for precise cooking measurements. Convert between ounces, grams, pounds, and other units. For baking and cooking, accuracy is crucial - our tool provides the precision you need for perfect recipes.",
        keywords: ["cooking measurements", "ounces to grams", "baking precision", "recipe conversion", "accurate measurements"],
      },
      {
        question: "Can I convert shipping weights and package measurements?",
        answer: "Yes! Our mass converter is perfect for shipping calculations. Convert between pounds, kilograms, ounces, and grams to determine shipping costs, package weights, and international shipping requirements.",
        keywords: ["shipping weights", "package measurements", "shipping costs", "international shipping", "weight calculations"],
      },
      {
        question: "How accurate are mass conversions for scientific use?",
        answer: "Our conversions use standard scientific values and are suitable for most scientific applications. For highly precise scientific work, verify with official standards. For general use, our accuracy is excellent.",
        keywords: ["scientific accuracy", "standard values", "precise measurements", "official standards", "general use"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Area",
    faqs: [
      {
        question: "How do I convert square feet to square meters?",
        answer: "Use our area converter to switch between square feet (imperial) and square meters (metric). 1 square meter equals approximately 10.764 square feet. Perfect for real estate, construction, and international property comparisons.",
        keywords: ["square feet to square meters", "area conversion", "real estate", "construction", "property comparisons"],
      },
      {
        question: "What's the difference between acres and hectares?",
        answer: "An acre is an imperial unit (43,560 square feet), while a hectare is metric (10,000 square meters). 1 hectare equals approximately 2.471 acres. Our converter helps you switch between these common land measurement units.",
        keywords: ["acres vs hectares", "land measurement", "imperial units", "metric units", "property area"],
      },
      {
        question: "How do I calculate room area for flooring or painting?",
        answer: "Measure length and width in your preferred units, multiply to get area, then use our converter to switch units if needed. For flooring, convert to square feet or square meters. For paint calculations, ensure you have the right area measurements.",
        keywords: ["room area calculation", "flooring measurements", "paint calculations", "length times width", "area measurements"],
      },
      {
        question: "Can I convert unusual area units like football fields or city blocks?",
        answer: "While our converter focuses on standard units, you can use it as a reference. A football field is about 1.32 acres, and city blocks vary by location. For precise conversions of non-standard units, contact us for assistance.",
        keywords: ["unusual area units", "football fields", "city blocks", "non-standard units", "precise conversions"],
      },
      {
        question: "How do I convert area measurements for international real estate?",
        answer: "Use our converter to compare international property listings. Convert all areas to a common unit (usually square meters) for easy comparison. This helps you understand property sizes regardless of the local measurement system.",
        keywords: ["international real estate", "property comparison", "square meters", "local measurements", "property sizes"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Volume",
    faqs: [
      {
        question: "How do I convert between liters and gallons?",
        answer: "Use our volume converter to switch between liters (metric) and gallons (imperial). 1 US gallon equals approximately 3.785 liters, while 1 UK gallon equals about 4.546 liters. Perfect for fuel calculations and international recipes.",
        keywords: ["liters to gallons", "volume conversion", "fuel calculations", "international recipes", "US vs UK gallons"],
      },
      {
        question: "What's the difference between US and UK volume measurements?",
        answer: "US and UK use different gallon sizes due to historical measurement standards. US gallon is smaller (3.785 liters) than UK gallon (4.546 liters). Our converter handles both systems for accurate international conversions.",
        keywords: ["US vs UK volume", "gallon differences", "historical standards", "international conversions", "measurement systems"],
      },
      {
        question: "How do I convert cooking measurements like cups and milliliters?",
        answer: "Use our volume converter for precise cooking measurements. Convert between cups, tablespoons, teaspoons, milliliters, and liters. Essential for following international recipes and ensuring accurate ingredient measurements.",
        keywords: ["cooking measurements", "cups to milliliters", "international recipes", "ingredient measurements", "precise cooking"],
      },
      {
        question: "Can I convert liquid and dry volume units?",
        answer: "Yes! Our converter handles both liquid units (fluid ounces, cups, gallons) and dry units (dry pints, dry gallons). Note that liquid and dry measurements differ due to density - they're not directly interchangeable.",
        keywords: ["liquid vs dry volume", "fluid ounces", "dry pints", "density differences", "volume measurements"],
      },
      {
        question: "How do I calculate tank or container volumes?",
        answer: "Measure the dimensions of your container, calculate volume using length × width × height, then use our converter to switch units if needed. Perfect for aquariums, fuel tanks, storage containers, and industrial applications.",
        keywords: ["tank volume", "container volume", "aquariums", "fuel tanks", "storage containers"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Temperature",
    faqs: [
      {
        question: "How do I convert between Celsius and Fahrenheit?",
        answer: "Use our temperature converter to switch between Celsius and Fahrenheit. Formula: °F = (°C × 9/5) + 32 and °C = (°F - 32) × 5/9. Our tool provides instant, accurate conversions for weather, cooking, and scientific applications.",
        keywords: ["Celsius to Fahrenheit", "temperature conversion", "weather", "cooking temperatures", "scientific applications"],
      },
      {
        question: "What's the difference between Celsius, Fahrenheit, and Kelvin?",
        answer: "Celsius is used worldwide (water freezes at 0°C, boils at 100°C). Fahrenheit is used in the US (water freezes at 32°F, boils at 212°F). Kelvin starts at absolute zero (-273.15°C) and is used in scientific applications.",
        keywords: ["Celsius vs Fahrenheit vs Kelvin", "absolute zero", "scientific temperature", "water freezing/boiling", "temperature scales"],
      },
      {
        question: "How do I convert cooking temperatures between different scales?",
        answer: "Use our converter for cooking temperature conversions. Common conversions: 350°F = 177°C (baking), 212°F = 100°C (boiling), 32°F = 0°C (freezing). Essential for following international recipes and using different ovens.",
        keywords: ["cooking temperatures", "baking temperatures", "international recipes", "oven temperatures", "temperature scales"],
      },
      {
        question: "Why do scientists use Kelvin instead of Celsius or Fahrenheit?",
        answer: "Kelvin starts at absolute zero (no thermal energy) and uses the same degree size as Celsius. This makes it ideal for scientific calculations, thermodynamics, and physics where temperature ratios and absolute values matter.",
        keywords: ["Kelvin usage", "absolute zero", "scientific calculations", "thermodynamics", "temperature ratios"],
      },
      {
        question: "How do I convert body temperature between different scales?",
        answer: "Normal body temperature is 98.6°F (37°C) or 310.15K. Use our converter to switch between scales for medical applications, international travel, or understanding temperature readings from different countries.",
        keywords: ["body temperature", "medical applications", "international travel", "temperature readings", "normal temperature"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Speed",
    faqs: [
      {
        question: "How do I convert between miles per hour and kilometers per hour?",
        answer: "Use our speed converter to switch between mph (imperial) and km/h (metric). 1 mph equals approximately 1.609 km/h. Perfect for international travel, vehicle specifications, and understanding speed limits in different countries.",
        keywords: ["mph to km/h", "speed conversion", "international travel", "vehicle specifications", "speed limits"],
      },
      {
        question: "What's the difference between speed and velocity?",
        answer: "Speed is how fast something moves (scalar quantity), while velocity includes both speed and direction (vector quantity). Our converter handles speed units like mph, km/h, knots, and meters per second.",
        keywords: ["speed vs velocity", "scalar quantity", "vector quantity", "speed units", "direction"],
      },
      {
        question: "How do I convert wind speeds for weather and aviation?",
        answer: "Use our converter for wind speed conversions. Aviation often uses knots, while weather reports use mph or km/h. Convert between these units for flight planning, weather monitoring, and international aviation communications.",
        keywords: ["wind speeds", "aviation", "knots", "weather reports", "flight planning"],
      },
      {
        question: "Can I convert speeds for sports and athletics?",
        answer: "Yes! Convert running speeds, cycling speeds, and other athletic measurements. Track and field often uses meters per second, while road sports use mph or km/h. Our converter helps compare performances across different measurement systems.",
        keywords: ["sports speeds", "athletics", "running speeds", "cycling", "track and field"],
      },
      {
        question: "How do I convert speeds for scientific and engineering applications?",
        answer: "Use our converter for scientific speed calculations. Convert between m/s, km/h, mph, and other units for physics experiments, engineering calculations, and technical specifications. Essential for international collaboration and standards.",
        keywords: ["scientific speeds", "engineering applications", "physics experiments", "technical specifications", "international standards"],
      },
    ],
  },
  {
    path: "/UnitsConvert/Time",
    faqs: [
      {
        question: "How do I convert between different time units?",
        answer: "Use our time converter to switch between seconds, minutes, hours, days, weeks, months, and years. Perfect for project planning, scheduling, and understanding time durations in different units.",
        keywords: ["time conversion", "project planning", "scheduling", "time durations", "time units"],
      },
      {
        question: "What's the difference between calendar time and duration time?",
        answer: "Calendar time refers to specific dates and times (like March 15, 2024), while duration time measures time spans (like 2 hours, 30 minutes). Our converter handles duration conversions for planning and calculations.",
        keywords: ["calendar time", "duration time", "time spans", "planning", "time calculations"],
      },
      {
        question: "How do I convert time zones for international travel?",
        answer: "While our converter focuses on duration units, for time zones you'd need to add or subtract hours based on your destination. Use our duration converter to calculate travel times and plan international schedules.",
        keywords: ["time zones", "international travel", "travel times", "international schedules", "duration calculations"],
      },
      {
        question: "Can I convert time units for scientific and technical applications?",
        answer: "Yes! Convert between milliseconds, seconds, minutes, and hours for scientific experiments, computer processing times, and technical specifications. Essential for precise timing measurements and international standards.",
        keywords: ["scientific time", "technical applications", "milliseconds", "processing times", "timing measurements"],
      },
      {
        question: "How do I calculate time differences for project management?",
        answer: "Use our time converter to calculate project durations, deadlines, and time allocations. Convert between different time units to create realistic schedules and track project progress effectively.",
        keywords: ["project management", "time differences", "project durations", "deadlines", "time allocations"],
      },
    ],
  },
  // IMAGES TOOLS
  {
    path: "/Images/Images-converter",
    faqs: [
      {
        question: "How do I convert images to different formats for my website?",
        answer: "Use our free image converter to transform images between formats like JPEG, PNG, WEBP, SVG, and BMP. Upload your image, select the target format, and download the converted file. Perfect for optimizing images for web use.",
        keywords: ["convert images", "image formats", "website images", "JPEG to PNG", "WEBP conversion"],
      },
      {
        question: "What's the best image format for my website?",
        answer: "Use JPEG for photos, PNG for images with transparency, WEBP for modern browsers (better compression), and SVG for logos/icons. Our converter helps you choose the right format and optimize file sizes for faster loading.",
        keywords: ["best image format", "website optimization", "file compression", "faster loading", "image optimization"],
      },
      {
        question: "How do I reduce image file size without losing quality?",
        answer: "Convert to more efficient formats like WEBP or optimize JPEG/PNG settings. Our converter maintains quality while reducing file size. For web use, aim for file sizes under 200KB for optimal page loading speed.",
        keywords: ["reduce image size", "maintain quality", "WEBP format", "file optimization", "page loading speed"],
      },
      {
        question: "Can I convert multiple images at once?",
        answer: "Currently, our converter processes one image at a time for optimal quality control. For bulk conversion, we recommend converting images individually to ensure each one is optimized correctly for your specific needs.",
        keywords: ["bulk image conversion", "multiple images", "quality control", "individual optimization", "batch processing"],
      },
      {
        question: "How do I convert images for different devices and screen sizes?",
        answer: "Convert images to responsive formats and create multiple sizes. Use our converter to create different versions for mobile, tablet, and desktop. Consider using modern formats like WEBP with fallbacks for older browsers.",
        keywords: ["responsive images", "mobile optimization", "screen sizes", "WEBP fallbacks", "device compatibility"],
      },
    ],
  },
  {
    path: "/Images/Dither",
    faqs: [
      {
        question: "What is image dithering and why use Oslo Toolbox's Dithering Tool?",
        answer:
          "Image dithering is a process that simulates more colors and gradients in images with a limited color palette by smartly distributing pixels. Oslo Toolbox's Dithering Tool lets you apply advanced dithering algorithms like Floyd-Steinberg, Atkinson, Burkes, Sierra, Bayer, and more, directly in your browser. No uploads, no registration, just instant results.",
        keywords: ["image dithering", "dithering tool", "Floyd-Steinberg", "Atkinson", "Burkes", "Sierra", "Bayer dithering", "online dither", "free dither tool", "browser dithering"],
      },
      {
        question: "Which dithering algorithms are supported by Oslo Toolbox?",
        answer:
          "Oslo Toolbox supports a wide range of dithering algorithms: Floyd-Steinberg, Atkinson, Burkes, Stucki, Sierra, Sierra Lite, Two-Row Sierra, Stevenson-Arce, Jarvis-Judice-Ninke, Bayer 4x4 and 8x8 (ordered), simple binary threshold, halftone, random threshold, and dot diffusion. You can preview and compare all these methods instantly.",
        keywords: ["dithering algorithms", "Floyd-Steinberg", "Atkinson", "Burkes", "Stucki", "Sierra", "Bayer ordered dithering", "threshold dithering", "halftone", "dot diffusion"],
      },
      {
        question: "How do I use the Dithering Tool to create retro or print-style images?",
        answer: "Upload your image, select a dithering algorithm (like Floyd-Steinberg or Bayer), adjust the threshold and resolution, and preview the result in real time. Download your dithered image as PNG. Perfect for retro pixel art, print simulation, or reducing color banding in gradients.",
        keywords: ["retro dithering", "pixel art", "print simulation", "reduce color banding", "gradient dithering", "dither PNG"],
      },
      {
        question: "What makes Oslo Toolbox's Dithering Tool better than other online dithering tools?",
        answer:
          "Oslo Toolbox offers more dithering algorithms, instant previews, no upload limits, and a modern, mobile-friendly UI. All processing is done in your browser for privacy. You get fine control over threshold, resolution, invert, and serpentine scanning, with results you can download instantly.",
        keywords: ["best dithering tool", "compare dithering tools", "browser dithering", "privacy image tool", "mobile dithering tool", "dither settings"],
      },
      {
        question: "When should I use dithering for my images?",
        answer:
          "Use dithering when converting images to black and white, reducing color depth, preparing graphics for print, or creating retro/8-bit effects. Dithering is also great for GIFs, web graphics, and any situation where you want to avoid color banding or simulate more detail with fewer colors.",
        keywords: ["when to use dithering", "black and white dither", "color depth reduction", "print graphics", "8-bit effect", "avoid color banding"],
      },
    ],
  },
  {
    path: "/Images/Noise",
    faqs: [
      {
        question: "How do I add noise effects to my images?",
        answer: "Use our noise tool to add texture and character to your images. Upload your image, adjust the noise amount and strength using the sliders, and preview the effect in real-time. Perfect for creating vintage looks or adding texture to flat designs.",
        keywords: ["noise effects", "image texture", "vintage looks", "flat designs", "noise adjustment"],
      },
      {
        question: "What's the difference between noise amount and strength?",
        answer: "Noise amount controls how many noise pixels are added to the image, while strength determines how visible or intense each noise pixel appears. Higher amount = more noise pixels, higher strength = more visible noise effect.",
        keywords: ["noise amount", "noise strength", "noise pixels", "visible effects", "noise intensity"],
      },
      {
        question: "How do I create a film grain effect with noise?",
        answer: "Use low noise amount with medium strength to simulate film grain. Adjust the resolution slider to control grain size. This creates a subtle, realistic film texture that adds character without overwhelming the original image.",
        keywords: ["film grain effect", "realistic texture", "grain size", "subtle noise", "film simulation"],
      },
      {
        question: "Can I use noise to fix banding in gradient images?",
        answer: "Yes! Adding subtle noise can help break up color banding in gradients. Use very low noise amounts with low strength to smooth transitions without making the noise too obvious. This is especially useful for web graphics.",
        keywords: ["fix banding", "gradient images", "color transitions", "subtle noise", "web graphics"],
      },
      {
        question: "How do I remove noise from images?",
        answer: "While our tool adds noise, you can reduce existing noise by using image editing software with noise reduction filters. For best results, shoot photos at lower ISO settings to minimize noise in the first place.",
        keywords: ["remove noise", "noise reduction", "image editing", "ISO settings", "photo quality"],
      },
    ],
  },
  {
    path: "/Images/Blur",
    faqs: [
      {
        question: "How do I create different types of blur effects in my images?",
        answer: "Our blur tool offers five different effects: Gaussian Blur for smooth, natural blur; Motion Blur for dynamic movement effects; Average Blur for simple, even blur; Stack Blur for smoother results; and Directional Blur for motion in specific directions.",
        keywords: ["blur effects", "Gaussian Blur", "Motion Blur", "Average Blur", "Stack Blur", "Directional Blur"],
      },
      {
        question: "What's the best blur type for portrait photography?",
        answer: "Use Gaussian Blur for portrait photography to create natural-looking background blur (bokeh effect). Adjust the blur intensity to 20-40 for subtle background separation, or higher for more dramatic effects while keeping the subject sharp.",
        keywords: ["portrait photography", "Gaussian Blur", "bokeh effect", "background blur", "subject sharpness"],
      },
      {
        question: "How do I create a motion blur effect for action shots?",
        answer: "Use Motion Blur with angle adjustment to simulate camera movement or subject motion. Set the angle to match the direction of movement in your image. Higher intensity values create more dramatic motion effects.",
        keywords: ["motion blur", "action shots", "camera movement", "subject motion", "dramatic effects"],
      },
      {
        question: "What's the difference between Gaussian and Stack blur?",
        answer: "Gaussian Blur creates smooth, natural-looking blur using a mathematical distribution. Stack Blur uses multiple passes for smoother results and is often faster to process. Gaussian is better for realistic effects, while Stack is great for performance.",
        keywords: ["Gaussian vs Stack blur", "smooth blur", "multiple passes", "realistic effects", "processing speed"],
      },
      {
        question: "How do I use blur to create depth of field effects?",
        answer: "Apply Gaussian Blur to background elements while keeping foreground subjects sharp. Adjust blur intensity based on distance - closer objects should be sharper, distant objects more blurred. This creates realistic depth of field similar to professional photography.",
        keywords: ["depth of field", "background blur", "foreground sharpness", "distance effects", "professional photography"],
      },
    ],
  },
];

export default faqData;
