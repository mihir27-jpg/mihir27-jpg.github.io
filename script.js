// Update these two values before publishing your store.
const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Example: 919876543210 (country code + number, no + or spaces)
const INSTAGRAM_URL = "https://instagram.com/yourusername";

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Guitar Guy! I'd like to know more about your handcrafted guitar art.")}`;

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const product = link.dataset.product;
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Guitar Guy! I'm interested in: ${product}. Please share details and pricing.`)}`;
  });
});

// Replace the Instagram link in index.html with your real profile URL before publishing.
