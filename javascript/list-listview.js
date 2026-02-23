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

const listContainer = document.getElementById("productList");

products.forEach(product => {
  const row = document.createElement("div");
  row.className =
    "grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-4 py-4 hover:bg-slate-900 transition";

  row.innerHTML = `
    <!-- Product Name -->
    <div class="text-blue-400 font-medium text-lg md:text-base">
      ${product.name}
    </div>

    <!-- Price -->
    <div class="text-slate-300">
      <span class="md:hidden text-slate-400 mr-1">Price:</span>
      $${product.price.toFixed(2)}
    </div>

    <!-- Availability -->
    <div class="${
      product.availability ? "text-green-400" : "text-red-400"
    }">
      <span class="md:hidden text-slate-400 mr-1">Status:</span>
      ${product.availability ? "Available" : "Unavailable"}
    </div>
  `;

  listContainer.appendChild(row);
});
