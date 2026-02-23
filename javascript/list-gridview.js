// Sample product data
const products = [
  { name: "Wireless Headphones", price: 129.99, availability: true },
  { name: "Smart Watch", price: 199.99, availability: false },
  { name: "Bluetooth Speaker", price: 89.99, availability: true },
  { name: "Gaming Mouse", price: 59.99, availability: true },
  { name: "Mechanical Keyboard", price: 149.99, availability: false },
  { name: "4K Monitor", price: 399.99, availability: true },
  { name: "USB-C Hub", price: 49.99, availability: true },
  { name: "External SSD", price: 179.99, availability: false },
  { name: "Laptop Stand", price: 39.99, availability: true },
  { name: "Webcam", price: 89.99, availability: true }
];

const grid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className =
    "bg-cardDark rounded-xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform";

  card.innerHTML = `
    <h2 class="text-lg font-semibold text-blue-400 mb-2">
      ${product.name}
    </h2>

    <div class="text-slate-300 mb-3">
      $${product.price.toFixed(2)}
    </div>

    <div class="text-sm font-medium ${
      product.availability ? "text-green-400" : "text-red-400"
    }">
      ${product.availability ? "Available" : "Unavailable"}
    </div>
  `;

  grid.appendChild(card);
});
