import Converter from "../../../components/Converter/Converter";

function Temperature() {
  const units = {
    All: ["Celsius", "Fahrenheit", "Kelvin"],
  };

  const unitValues = {
    Celsius: {
      Celsius: (value) => parseFloat(value),
      Fahrenheit: (value) => (parseFloat(value) * 9) / 5 + 32,
      Kelvin: (value) => parseFloat(value) + 273.15,
    },
    Fahrenheit: {
      Celsius: (value) => ((parseFloat(value) - 32) * 5) / 9,
      Fahrenheit: (value) => parseFloat(value),
      Kelvin: (value) => ((parseFloat(value) - 32) * 5) / 9 + 273.15,
    },
    Kelvin: {
      Celsius: (value) => parseFloat(value) - 273.15,
      Fahrenheit: (value) => ((parseFloat(value) - 273.15) * 9) / 5 + 32,
      Kelvin: (value) => parseFloat(value),
    },
  };

  return <Converter description="This toolbox provides you with a completely FREE temperature converter including Celsius, Fahrenheit, and Kelvin scales. For more informations about the data used for converting, scroll down and check under the converter." systems={["All"]} units={units} unitValues={unitValues} />;
}

export default Temperature;
