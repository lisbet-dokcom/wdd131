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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Albuquerque New Mexico Temple",
    location: "New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 87122,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-998219-wallpaper.jpg"
  },
  {
    templeName: "Perth Australia Temple",
    location: "Yokin, Western Australia",
    dedicated: "2001, May, 20",
    area: 6000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/400x250/perth-australia-temple-lds-957466-wallpaper.jpg"
  },
  {
    templeName: "Idaho Falls Idaho Temple",
    location: "Idaho, United States",
    dedicated: "2017, June, 4",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/7-Idaho-Falls-Temple-1375367.jpg"
  },
  {
    templeName: "Hartford Connecticut Temple",
    location: "Connecticut, States",
    dedicated: "2016, November, 20",
    area: 32246,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hartford-connecticut/400x250/hartford-temples-steeples-angel-moroni-1808856-wallpaper.jpg"
  },
  {
    templeName: "Melbourne Australia Temple",
    location: "Melbourne, Australia",
    dedicated: "2000, June, 16",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-austrailia-temple-lds-991373-wallpaper.jpg"
  }
];

function DisplayTemples(temples) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  temples.forEach(function (temple) {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedication: ${temple.dedicated}</p>
    <p>Size: ${temple.area}</p>`

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    card.appendChild(image);

    gallery.appendChild(card);
  })
}

const allTemplesLink = document.querySelector("#all-temples");
const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const largeTemplesLink = document.querySelector("#large-temples");
const smallTemplesLink = document.querySelector("#small-temples");
const selection = document.querySelector("#selection");

allTemplesLink.addEventListener("click", () => {
  DisplayTemples(temples);
  selection.innerText = "All Temples";
});
oldTemplesLink.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  DisplayTemples(filteredTemples);
  selection.innerText = "Old Temples";
});
newTemplesLink.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  DisplayTemples(filteredTemples);
  selection.innerText = "New Temples";
});
largeTemplesLink.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area > 90000);
  DisplayTemples(filteredTemples);
  selection.innerText = "Large Temples";
});
smallTemplesLink.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => temple.area < 10000);
  DisplayTemples(filteredTemples);
  selection.innerText = "Small Temples";
});

DisplayTemples(temples);