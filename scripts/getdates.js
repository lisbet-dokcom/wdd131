const short = document.querySelector("#short");
const today = new Date();

short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(today)}</span>`;
const year = document.querySelector("#year");
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

const month = document.querySelector("#month");
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth() + 1}</span>`; // Months are 0-based, so add 1

const day = document.querySelector("#day");
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;

const dayofweek = document.querySelector("#dayofweek");
dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;
