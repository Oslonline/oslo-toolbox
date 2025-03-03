import { FaKey, FaParagraph, FaQrcode, FaGithub, FaRuler, FaWeight, FaSquare, FaCube, FaThermometerHalf, FaTachometerAlt, FaClock, FaShieldAlt, FaFingerprint, FaPaintBrush, FaImage, FaRandom } from "react-icons/fa";
import { CgEditNoise } from "react-icons/cg";

const tools = [
  {
    name: "Misc Tools",
    link: "/Generators",
    text: "Password, Lorem, QR Code, Github Readme...",
    tools: [
      {
        name: "Password generator",
        description: "Generate secure passwords and edit settings",
        icon: FaKey,
        link: "/Generators/Password",
        hero: {
          title: "Password Generator",
          description: "Create strong and secure passwords with customizable settings. Our free password generator ensures your online security by providing unique and complex passwords.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Lorem Ipsum generator",
        description: "Generate lorem ipsum text",
        icon: FaParagraph,
        link: "/Generators/Lorem",
        hero: {
          title: "Lorem Ipsum Generator",
          description: "Generate placeholder text for your projects. Use our free lorem ipsum generator to create dummy text for your design and development needs.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "QR Code generator",
        description: "Generate QR codes from link or text",
        icon: FaQrcode,
        link: "/Generators/QrCode",
        hero: {
          title: "QR Code Generator",
          description: "Create QR codes from links or text. Our free QR code generator allows you to easily create QR codes for your website, business, or personal use.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Readme Generator",
        description: "Generate Github readme files",
        icon: FaGithub,
        link: "/Generators/Readme",
        hero: {
          title: "Readme Generator",
          description: "Generate professional Github readme files. Use our free readme generator to create well-structured and informative readme files for your projects.",
        },
        maintenance: true,
        new: false,
      },
    ],
  },
  {
    name: "Security tools",
    link: "/Security",
    text: "IP Lookup, Hash generator, UUID generator...",
    tools: [
      {
        name: "Ip Lookup",
        description: "Lookup IP addresses and get related infos",
        icon: FaShieldAlt,
        link: "/Security/Ip-lookup",
        hero: {
          title: "IP Lookup",
          description: "Lookup IP addresses and get related information. Use our free IP lookup tool to find details about any IP address.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Text to Hash",
        description: "Generate hash values from text",
        icon: FaFingerprint,
        link: "/Security/Hash",
        hero: {
          title: "Hash Generator",
          description: "Generate hash values from text. Our free hash generator supports various hashing algorithms to secure your data.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "UUID Generator",
        description: "Generate uuid (v1, v4)",
        icon: FaFingerprint,
        link: "/Security/Uuid",
        hero: {
          title: "UUID Generator",
          description: "Quickly generate unique identifiers (UUIDs) for use in applications, ensuring distinct values for database keys, session IDs, and more.",
        },
        maintenance: false,
        new: true,
      },
    ],
  },
  {
    name: "CSS tools",
    link: "/Css",
    text: "Gradient, Box-shadow...",
    tools: [
      {
        name: "Gradient generator",
        description: "Generate CSS linear & radial gradients",
        icon: FaPaintBrush,
        link: "/Css/Gradient",
        hero: {
          title: "CSS Gradient Generator",
          description: "Create beautiful CSS gradients. Use our free gradient generator to design stunning backgrounds for your web projects.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Box Shadow generator",
        description: "Generate CSS box shadows",
        icon: FaPaintBrush,
        link: "/Css/Box-shadow",
        hero: {
          title: "CSS Box Shadow Generator",
          description: "Create custom CSS box shadows. Our free box shadow generator helps you add depth and dimension to your web elements.",
        },
        maintenance: false,
        new: false,
      },
    ],
  },
  {
    name: "Image editing & altering tools",
    link: "/Images",
    text: "Images converter, Dithering...",
    tools: [
      {
        name: "Image Converter",
        description: "Convert images format up to 5 files at a time",
        icon: FaImage,
        link: "/Images/Images-converter",
        hero: {
          title: "Image Converter",
          description: "Convert between various image formats. Use our free image converter to easily switch between PNG, JPG, BMP, SVG, and WEBP formats.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Image Dithering",
        description: "Apply dithering/bitmap effect to images",
        icon: FaImage,
        link: "/Images/Dither",
        hero: {
          title: "Image Dithering",
          description: "Add a dither/bitmap effect to your image easily for free using the Floyd Steinberg algorithm. Insert your file, select the desired final effect resolution, click download and get your dithered image.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Noise effect",
        description: "Apply noise effect to images",
        icon: CgEditNoise,
        link: "/Images/Noise",
        hero: {
          title: "Noise Effect",
          description: "Add a noise effect to your image easily for free. Insert your file, select the desired noise amount & strength, click download and get your image.",
        },
        maintenance: false,
        new: true,
      },
    ],
  },
  {
    name: "Units converters",
    link: "/UnitsConvert",
    text: "Length, Mass, Area, Volume...",
    tools: [
      {
        name: "Length",
        description: "Convert length units",
        icon: FaRuler,
        link: "/UnitsConvert/Length",
        hero: {
          title: "Length Converter",
          description: "Convert between various length units. Our free length converter supports both metric and imperial units, making it easy to switch between different measurement systems.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Mass",
        description: "Convert mass units",
        icon: FaWeight,
        link: "/UnitsConvert/Mass",
        hero: {
          title: "Mass Converter",
          description: "Convert between various mass units. Use our free mass converter to easily switch between kilograms, pounds, and other units of mass.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Area",
        description: "Convert area units",
        icon: FaSquare,
        link: "/UnitsConvert/Area",
        hero: {
          title: "Area Converter",
          description: "Convert between various area units. Our free area converter helps you convert between square meters, acres, and other units of area.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Volume",
        description: "Convert volume units",
        icon: FaCube,
        link: "/UnitsConvert/Volume",
        hero: {
          title: "Volume Converter",
          description: "Convert between various volume units. Use our free volume converter to switch between liters, gallons, and other units of volume.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Temperature",
        description: "Convert temperature units",
        icon: FaThermometerHalf,
        link: "/UnitsConvert/Temperature",
        hero: {
          title: "Temperature Converter",
          description: "Convert between various temperature units. Our free temperature converter supports Celsius, Fahrenheit, and Kelvin scales.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Speed",
        description: "Convert speed units",
        icon: FaTachometerAlt,
        link: "/UnitsConvert/Speed",
        hero: {
          title: "Speed Converter",
          description: "Convert between various speed units. Use our free speed converter to switch between meters per second, miles per hour, and other units of speed.",
        },
        maintenance: false,
        new: false,
      },
      {
        name: "Time",
        description: "Convert time units",
        icon: FaClock,
        link: "/UnitsConvert/Time",
        hero: {
          title: "Time Converter",
          description: "Convert between various time units. Our free time converter helps you switch between seconds, minutes, hours, and other units of time.",
        },
        maintenance: false,
        new: false,
      },
    ],
  },
];

export default tools;
