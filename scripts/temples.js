const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const hazButton = document.querySelector('#menu');
const nav = document.querySelector('.nav');

hazButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hazButton.classList.toggle('open');
});


