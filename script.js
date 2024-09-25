// Function to convert temperature
function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultElement = document.getElementById('result');

    if (!temperatureInput || isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp;
    let convertedUnit;

    if (unitInput === "Celsius") {
        convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        convertedUnit = "Fahrenheit";
        let kelvin = temperature + 273.15; // Celsius to Kelvin
        resultElement.textContent = `${temperature} °C is equal to ${convertedTemp.toFixed(2)} °F or ${kelvin.toFixed(2)} K.`;
    } else if (unitInput === "Fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        convertedUnit = "Celsius";
        let kelvin = (temperature - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        resultElement.textContent = `${temperature} °F is equal to ${convertedTemp.toFixed(2)} °C or ${kelvin.toFixed(2)} K.`;
    } else if (unitInput === "Kelvin") {
        convertedTemp = temperature - 273.15; // Kelvin to Celsius
        convertedUnit = "Celsius";
        let fahrenheit = (temperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        resultElement.textContent = `${temperature} K is equal to ${convertedTemp.toFixed(2)} °C or ${fahrenheit.toFixed(2)} °F.`;
    }
}

// Add event listener to the convert button
document.getElementById('convertButton').addEventListener('click', convertTemperature);
