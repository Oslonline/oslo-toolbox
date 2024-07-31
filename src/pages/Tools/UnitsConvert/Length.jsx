import React from "react";
import Converter from "../../../components/Converter/Converter";

function Lenght() {
  const units = {
    SI: ["Kilometre", "Metre", "Centimetre", "Millimetre", "Micrometre", "Nanometre"],
    US: ["Nautical mile", "Mile", "Furlong", "Rod", "Fathom", "Yard", "Foot", "Inch"],
    All: ["Kilometre", "Metre", "Centimetre", "Millimetre", "Micrometre", "Nanometre", "Nautical mile", "Mile", "Furlong", "Rod", "Fathom", "Yard", "Foot", "Inch"],
  };

  const unitValues = {
    Kilometre: 1000,
    Metre: 1,
    Centimetre: 0.01,
    Millimetre: 0.001,
    Micrometre: 0.000001,
    Nanometre: 0.000000001,
    "Nautical mile": 1852,
    Mile: 1609,
    Furlong: 201,
    Rod: 5.029,
    Fathom: 1.829,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
  };

  return (
    <Converter
      title="A free Lenght units converter with International System of Units (SI) & Imperial and US metric system !!"
      description="This toolbox provide you a completely FREE length converter including the international system of units & the imperial system of units with US & UK units. For more informations about the data used for converting, scroll down and check under the converter."
      systems={["SI", "US", "All"]}
      units={units}
      unitValues={unitValues}
    />
  );
}

export default Lenght;
