// Replace these placeholders before launch.
const WHATSAPP_NUMBER = "const WHATSAPP_NUMBER = "918810559546"; // digits only, e.g. 919876543210
const INSTAGRAM_URL = "https://instagram.com/guitarhubindia";
const cart = [];
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const wa = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("insta-link").href = INSTAGRAM_URL;
document.getElementById("contact-link").href = wa("Hi Guitar Guy! I'd like to know more about your handcrafted guitar art.");

function renderCart() {
  const items = document.getElementById("items");
  items.innerHTML = "";
  const count = cart.reduce((n, x) => n + x.qty, 0);
  const total = cart.reduce((n, x) => n + x.price * x.qty, 0);
  document.getElementById("count").textContent = `(${count})`;
  document.getElementById("empty").hidden = count > 0;
  cart.forEach((x, i) => {
    const row = document.createElement("div"); row.className = "cart-row";
    const name = document.createElement("span"); name.textContent = `${x.name} × ${x.qty}`;
    const value = document.createElement("span"); value.textContent = money(x.price * x.qty) + " ";
    const remove = document.createElement("button"); remove.textContent = "Remove";
    remove.onclick = () => { cart.splice(i, 1); renderCart(); };
    value.appendChild(remove); row.append(name, value); items.appendChild(row);
  });
  document.getElementById("total").textContent = money(total);
}
document.querySelectorAll("[data-name]").forEach(btn => btn.addEventListener("click", () => {
  const name = btn.dataset.name, price = Number(btn.dataset.price);
  const found = cart.find(x => x.name === name);
  if (found) found.qty++; else cart.push({name, price, qty: 1});
  renderCart(); document.querySelector(".cart").scrollIntoView({behavior:"smooth"});
}));
document.getElementById("clear").onclick = () => { cart.splice(0); renderCart(); };
document.getElementById("checkout").onclick = () => {
  if (!cart.length) { alert("Add an item to your cart first."); return; }
  if (WHATSAPP_NUMBER.includes("X")) { alert("Add your real WhatsApp number in script.js before using orders."); return; }
  const lines = cart.map(x => `• ${x.name} × ${x.qty} — ${money(x.price*x.qty)}`).join("\n");
  const total = cart.reduce((n,x) => n+x.price*x.qty,0);
  window.open(wa(`Hi Guitar Guy! I'd like to enquire/order:\n${lines}\nEstimated total: ${money(total)}\nPlease confirm availability, delivery timeline and payment details.`), "_blank", "noopener");
};
document.getElementById("custom-form").onsubmit = e => {
  e.preventDefault();
  if (WHATSAPP_NUMBER.includes("X")) { alert("Add your real WhatsApp number in script.js before using custom requests."); return; }
  const name = document.getElementById("name").value.trim();
  const idea = document.getElementById("idea").value.trim();
  const budget = document.getElementById("budget").value;
  window.open(wa(`Hi Guitar Guy! I'd like a custom guitar art design.\nName: ${name}\nDesign idea: ${idea}\nBudget: ${budget}\nPlease discuss final price and delivery timeline.`), "_blank", "noopener");
};
renderCart();
