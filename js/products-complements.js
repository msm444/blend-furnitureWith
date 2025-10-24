

const complementsProducts = [

  {
    id: 1,
    name: "Ferula",
    image: "images/complements/5-4-705x705.jpg",
    hoverImage: "images/complements/1-5-705x705.jpg"

  },

  {
    id: 2,
    name: "Karibù",
    image: "images/complements/d157e226-fae0-4b41-9e66-e4bb73b8f869-450x450.jpg",
    hoverImage: "images/complements/c8093548-31c0-4933-95e5-34b4e1739bb3-450x450.jpg"

  },

  {
    id: 3,
    name: "Planeta",
    image: "images/complements/web-16.jpg",
    hoverImage: "images/complements/9B2F5524-7432-4717-AC1D-8544720E69DB.jpg"

  },


  {
    id: 4,
    name: "Pepe",
    image: "images/complements/Web1-1-450x450.jpg",
    hoverImage: "images/complements/3AB0F77E-3B44-404C-9272-196EC81BF505-450x450.jpg"

  },


  {
    id: 5,
    name: "Mater familias Pouf",
    image: "images/complements/23-705x705.jpg",
    hoverImage: "images/complements/20-450x450.jpg"

  },



];



const container = document.getElementById("products-container1");

container.innerHTML = complementsProducts.map(
  (p) => `
  <div class="product-card">
 <img 
  src="${p.image}" 
  data-hover="${p.hoverImage}" 
  alt="${p.name}" 
  class="product-img"/>
    <h5>${p.name}</h5>
    <div class="actions">
      <span class='show-details'><i class="fas fa-list-ul"></i> Show Details</span>
      <span><i class="far fa-star"></i> Add To Wishlist</span>
    </div>
    <button class="add-to-cart">Add To Cart</button>
  </div>
  `
).join("");



document.querySelectorAll(".product-img").forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  if (hoverSrc) {
    img.addEventListener("mouseenter", () => {
      img.src = hoverSrc;
    });
    img.addEventListener("mouseleave", () => {
      img.src = originalSrc;
    });
  }
});



function showSuccessMessage(text) {
  const message = document.createElement("div");
  message.className =
    "success-message position-fixed top-0 start-50 translate-middle-x mt-3 px-4 py-2 bg-success text-white rounded shadow";
  message.style.zIndex = "9999";
  message.textContent = text;

  document.body.appendChild(message);
  setTimeout(() => message.remove(), 2000);
}

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const name = e.target.closest(".product-card").querySelector("h5").textContent;
    showSuccessMessage(`${name} added successfully `);
  });
});











