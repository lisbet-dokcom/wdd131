const temperature = 22;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
    } else {
        return "N/A";
    }
}

const chill = calculateWindChill(temperature, windSpeed);
document.getElementById("chill").innerHTML = `${chill.toFixed(1)} °C`;

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
