const products = [
  { id: 1, name: "Kafijas krūze", price: "7.99€" },
  { id: 2, name: "Auduma maisiņš", price: "4.99€" },
];

const container = document.getElementById("products");
products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<h2>${p.name}</h2><p>Cena: ${p.price}</p>`;
  container.appendChild(div);
});
