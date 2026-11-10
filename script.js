
const desserts = [
    {
        name: "Chocolate Cake",
        category: "Cake",
        price: 150,
        weight: "200 g",
        image: "images/chocolate.jpg",
        isAvailable: true
    },
    {
        name: "Cheesecake",
        category: "Cake",
        price: 180,
        weight: "250 g",
        image: "images/cheesecake.jpg",
        isAvailable: true
    },
    {
        name: "Macarons",
        category: "Cookies",
        price: 120,
        weight: "100 g",
        image: "images/macarons.jpg",
        isAvailable: false
    },
    {
        name: "Tiramisu",
        category: "Dessert",
        price: 170,
        weight: "200 g",
        image: "images/tiramisu.jpg",
        isAvailable: true
    },
    {
        name: "Donuts",
        category: "Bakery",
        price: 90,
        weight: "150 g",
        image: "images/donuts.jpg",
        isAvailable: false
    }
];

// Create dessert card
function createCard(dessert) {
    return `
        <div class="card">
            <img src="${dessert.image}"
                 alt="${dessert.name}"
                 onerror="this.onerror=null; this.src='images/placeholder.jpg'">

            <h3>${dessert.name}</h3>
            <p>Category: ${dessert.category}</p>
            <p>Price: ${dessert.price} UAH</p>
            <p>Weight: ${dessert.weight}</p>
        </div>
    `;
}

//Show all d
const dessertList = document.getElementById("dessertList");

dessertList.innerHTML = desserts.map(createCard).join("");

//Show only available
const availableDesserts = desserts.filter(dessert => dessert.isAvailable === true);
const availableList = document.getElementById("availableList");
availableList.innerHTML = availableDesserts.map(createCard).join("");
