const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const optional = document.optional;
document.getElementById("optional").textContent = `(Optional)`;

const products = [
    {
        id: fc - 1888,
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: fc - 2050,
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: fs - 1987,
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: ac - 2000,
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: jj - 1969,
        name: "warp equalizer",
        averagerating: 5.0
    }
];


const productSelect = document.querySelector("#product");

function createProductList() {
    products.forEach(p => {
        const optElement = document.createElement("option");
        optElement.setAttribute("value", p.id);
        optElement.innerText = p.name;
        productSelect?.appendChild(optElement);
    });
}
createProductList();
