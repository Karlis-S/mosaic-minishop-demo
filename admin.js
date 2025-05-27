const tableBody = document.querySelector("#orderTable tbody");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

function renderOrders() {
  tableBody.innerHTML = "";
  orders.forEach((order, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.name}</td>
      <td>${order.address}</td>
      <td>${order.product}</td>
      <td>${order.status}</td>
      <td>
        <select data-index="${index}">
          <option value="Jauns" ${order.status === "Jauns" ? "selected" : ""}>Jauns</option>
          <option value="Apstrādē" ${order.status === "Apstrādē" ? "selected" : ""}>Apstrādē</option>
          <option value="Nosūtīts" ${order.status === "Nosūtīts" ? "selected" : ""}>Nosūtīts</option>
        </select>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

tableBody.addEventListener("change", (e) => {
  if (e.target.tagName === "SELECT") {
    const index = e.target.getAttribute("data-index");
    orders[index].status = e.target.value;
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
  }
});

renderOrders();
