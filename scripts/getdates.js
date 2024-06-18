// select the DOM elements for output

const short = document.querySelector("#short");

// use the date object
const today = new Date();

short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}</span>`;


// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

