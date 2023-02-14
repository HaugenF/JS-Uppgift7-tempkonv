const tempCelsius = document.querySelector(".tempCelsius");
const tempFahrenheit = document.querySelector(".tempFahrenheit");
const tempKelvin = document.querySelector(".tempKelvin");
const tempRankine = document.querySelector(".tempRankine");
const formBtn = document.querySelector(".form-button");
const formTemp = document.querySelector(".form-input");
const formScale = document.querySelector(".form-select");
const errorText = document.querySelector(".error");

let celsius;
let fahrenheit;
let kelvin;
let rankine;

/* test test */
function convertCelsius() {
  fahrenheit = celsius * 1.8 + 32;
  kelvin = celsius + 273.15;
  rankine = celsius * 1.8 + 491.67;
}
function convertFahrenheit() {
  celsius = (fahrenheit - 32) * 0.5556;
  kelvin = celsius + 273.15;
  rankine = celsius * 1.8 + 491.67;
}
function convertKelvin() {
  celsius = kelvin - 273.15;
  fahrenheit = celsius * 1.8 + 32;
  rankine = celsius * 1.8 + 491.67;
}
function convertRankine() {
  fahrenheit = rankine - 459.67;
  celsius = (fahrenheit - 32) * 0.5556;
  kelvin = celsius + 273.15;
}

formBtn.addEventListener("click", (startConvert) => {
  if (formTemp.value === "") {
    errorText.innerHTML = "Fyll i en temperatur!";
  } else {
    if (formScale.value === "title") {
      errorText.innerHTML = "Välj en temperaturskala!";
    } else if (formScale.value === "celsius") {
      celsius = Number(formTemp.value);
      convertCelsius();
      errorText.innerHTML = "";
    } else if (formScale.value === "fahrenheit") {
      fahrenheit = Number(formTemp.value);
      convertFahrenheit();
      errorText.innerHTML = "";
    } else if (formScale.value === "kelvin") {
      kelvin = Number(formTemp.value);
      convertKelvin();
      errorText.innerHTML = "";
    } else if (formScale.value === "rankine") {
      rankine = Number(formTemp.value);
      convertRankine();
      errorText.innerHTML = "";
    }
    tempCelsius.innerHTML = celsius.toFixed(0);
    tempFahrenheit.innerHTML = fahrenheit.toFixed(0);
    tempKelvin.innerHTML = kelvin.toFixed(2);
    tempRankine.innerHTML = rankine.toFixed(2);
  }
});
