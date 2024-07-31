import Converter from "../../../components/Converter/Converter";

function Mass() {
  const units = {
    SI: ["Gigatonne", "Megatonne", "Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Nanogram", "Picogram"],
    US: ["US ton", "UK ton", "Pound", "Ounce"],
    All: ["Gigatonne", "Megatonne", "Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Nanogram", "Picogram", "US ton", "UK ton", "Pound", "Ounce"],
  };

  const unitValues = {
    Gigatonne: 1e15,
    Megatonne: 1e12,
    Tonne: 1e9,
    Kilogram: 1e3,
    Gram: 1,
    Milligram: 1e-3,
    Microgram: 1e-6,
    Nanogram: 1e-9,
    Picogram: 1e-12,
    "US ton": 907185000,
    "UK ton": 1016000000,
    Pound: 453.59,
    Ounce: 28.35,
  };

  return <Converter description="This toolbox provide you a completely FREE mass converter including the international system of units & the imperial system of units with US & UK units. For more informations about the data used for converting, scroll down and check under the converter." systems={["SI", "US", "All"]} units={units} unitValues={unitValues} />;
}

export default Mass;
