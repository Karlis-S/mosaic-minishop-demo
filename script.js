const products = [
  { id: 1, name: "Kafijas krūze", price: "7.99€" },
  { id: 2, name: "Auduma maisiņš", price: "4.99€" }
];

const container = document.getElementById("products");
const productSelect = document.getElementById("productSelect");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<h2>${p.name}</h2><p>Cena: ${p.price}</p>`;
  container?.appendChild(div);

  const option = document.createElement("option");
  option.value = p.name;
  option.textContent = p.name;
  productSelect?.appendChild(option);
});

document.getElementById("orderForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const address = document.getElementById("address").value;
  const product = productSelect.value;

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push({ name, address, product, status: "Jauns" });
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Paldies! Pasūtījums pieņemts.");
  e.target.reset();
});
