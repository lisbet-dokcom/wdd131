const temperature = 10
const windSpeed = 5

const calculateWindChill = function (temperature, windSpeed) {
    return 13.12 + 0.6215 * (temperature) - 11.37 * (windSpeed ** 0.16) + 0.3965 * (temperature) * (windSpeed ** 0.16)
}

const chill = calculateWindChill(temperature, windSpeed);
const windchillElement = document.windchill;
document.getElementById("chill").innerHTML = `${chill.toFixed(1)} °C`;

const tempElement = document.temp;
document.getElementById("temp").innerHTML = `${temperature} °C`;

const windElement = document.wind;
document.getElementById("wind").innerHTML = `${windSpeed} km/h`;


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

