import Converter from "../../../components/Converter/Converter";

function Volume() {
  const units = {
    SI: ["Cubic meter", "Cubic centimeter", "Cubic millimeter"],
    USLiquid: ["Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon"],
    USDry: ["Dry pint", "Dry quart", "Dry gallon"],
    UK: ["Fluid ounce", "Gill", "Pint", "Quart", "Gallon"],
    All: ["Cubic meter", "Cubic centimeter", "Cubic millimeter", "Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon", "Dry pint", "Dry quart", "Dry gallon", "Fluid ounce", "Gill", "Pint", "Quart", "Gallon"],
  };

  const unitValues = {
    "Cubic meter": 1,
    "Cubic centimeter": 1e-6,
    "Cubic millimeter": 1e-9,
    Teaspoon: 4.929e-6,
    Tablespoon: 14.787e-6,
    "Fluid ounce": 29.574e-6,
    Cup: 236.588e-6,
    Pint: 473.176e-6,
    Quart: 946.353e-6,
    Gallon: 3.78541e-3,
    "Dry pint": 550.61e-6,
    "Dry quart": 1101.221e-6,
    "Dry gallon": 4.404884e-3,
    Gill: 142.065e-6,
  };

  return (
    <Converter
      title="A free Volume units converter with International System of Units (SI), US, UK & Dry systems !!"
      description="This toolbox provides you a completely FREE volume converter including the International System of Units (SI), the US liquid and dry systems, and the UK system. For more information about the data used for converting, scroll down and check under the converter."
      systems={["SI", "USLiquid", "USDry", "UK", "All"]}
      units={units}
      unitValues={unitValues}
    />
  );
}

export default Volume;
