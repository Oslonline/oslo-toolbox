import Converter from "../../../components/Converter/Converter";

function Area() {
  const units = {
    SI: ["Square Kilometre (km²)", "Square Hectometre (hm²)", "Square Dekametre (dam²)", "Square Metre (m²)", "Square Decimetre (dm²)", "Square Centimetre (cm²)", "Square Millimetre (mm²)", "Square Micrometre (μm²)", "Square Nanometre (nm²)", "Hectare (ha)", "Are (a)"],
    US: ["Square Mile (mi²)", "Acre (ac)", "Square Yard (yd²)", "Square Foot (ft²)", "Square Mile (US Survey)", "Square Foot (US Survey)", "Acre (US Survey)", "Square Rod (US Survey)", "Circular Inch", "Township", "Section", "Rood", "Square Rod", "Square pole", "Circular Mil", "Homestead", "Sabin"],
    Others: ["Barn", "Plaza", "Varas Castellanas Cuad", "Varas Conuqueras Cuad", "Electron Cross Section", "Cuerda", "Arpent"],
    All: [
      "Square Kilometre (km²)",
      "Square Hectometre (hm²)",
      "Square Dekametre (dam²)",
      "Square Metre (m²)",
      "Square Decimetre (dm²)",
      "Square Centimetre (cm²)",
      "Square Millimetre (mm²)",
      "Square Micrometre (μm²)",
      "Square Nanometre (nm²)",
      "Hectare (ha)",
      "Are (a)",
      "Acre (ac)",
      "Square Mile (mi²)",
      "Square Yard (yd²)",
      "Square Foot (ft²)",
      "Square Mile (US Survey)",
      "Square Foot (US Survey)",
      "Square Rod (US Survey)",
      "Acre (US Survey)",
      "Circular Inch",
      "Township",
      "Section",
      "Rood",
      "Square Rod",
      "Square pole",
      "Circular Mil",
      "Homestead",
      "Sabin",
      "Barn",
      "Plaza",
      "Varas Castellanas Cuad",
      "Varas Conuqueras Cuad",
      "Electron Cross Section",
      "Cuerda",
      "Arpent",
    ],
  };

  const unitValues = {
    "Square Kilometre (km²)": 1e6,
    "Square Hectometre (hm²)": 1e8,
    "Square Dekametre (dam²)": 100,
    "Square Metre (m²)": 1,
    "Square Decimetre (dm²)": 0.01,
    "Square Centimetre (cm²)": 1e-4,
    "Square Millimetre (mm²)": 1e-6,
    "Square Micrometre (μm²)": 1e-12,
    "Square Nanometre (nm²)": 1e-18,
    "Hectare (ha)": 1e4,
    "Are (a)": 100,
    "Square Mile (mi²)": 2.59e6,
    "Acre (ac)": 4046.86,
    "Square Yard (yd²)": 0.836127,
    "Square Foot (ft²)": 0.092903,
    "Square Inch (in²)": 0.00064516,
    Barn: 1e-28,
    "Square Mile (US Survey)": 2.58999e6,
    "Square Foot (US Survey)": 0.0929034116,
    "Circular Inch": 0.0005067075,
    Township: 9.3239571972e7,
    Section: 2.58998811e6,
    "Acre (US Survey)": 4046.8726098743,
    Rood: 1011.7141056,
    "Square Chain": 404.68564224,
    "Square Rod": 25.29285264,
    "Square Rod (US Survey)": 25.2929538117,
    "Square Perch": 25.29285264,
    "Square Pole": 25.29285264,
    "Square Mil": 6.4516e-10,
    "Circular Mil": 5.067074790975e-10,
    Homestead: 647497.027584,
    Sabin: 0.09290304,
    Arpent: 3418.8929236669,
    Cuerda: 3930.395625,
    Plaza: 6400,
    "Varas Castellanas Cuad": 0.698737,
    "Varas Conuqueras Cuad": 6.288633,
    "Electron Cross Section": 6.6524615999999e-29,
  };

  return (
    <Converter
      title="A free Area units converter with International System of Units (SI), Imperial and US & ES metric system !!"
      description="This toolbox provide you a completely FREE area converter including the international system of units & the imperial system of units with US, UK & ES units. For more infos about the data used for converting, scroll down and check under the converter."
      systems={["SI", "US", "Others", "All"]}
      units={units}
      unitValues={unitValues}
    />
  );
}

export default Area;
