const convertBtn = document.getElementById("convertBtn");
const inputValue = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const outputValue = document.getElementById("outputValue");
const outputUnit = document.getElementById("outputUnit");

const conversionTable = {
  m: {
    m: 1,
    ft: 3.2808,
    yd: 1.0936,
  },
  ft: {
    m: 0.3048,
    ft: 1,
    yd: 0.3333,
  },
  yd: {
    m: 0.9144,
    ft: 3,
    yd: 1,
  },
};

convertBtn.addEventListener("click", () => {
  const input = parseFloat(inputValue.value);
  const output =
    input * conversionTable[inputUnit.value][outputUnit.value];
  outputValue.value = output.toFixed(4);
});
