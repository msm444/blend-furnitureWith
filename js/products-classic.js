
const classicProducts = [

  {
    id: 1,
    name: "Ferula",
    image: "images/classic/DC-028-400x400.jpg",


  },

  {
    id: 2,
    name: "Karibù",
    image: "images/classic/DC-083-400x400.jpg",


  },

  {
    id: 3,
    name: "Planeta",
    image: "images/classic/DC-121-400x400.jpg",


  },


  {
    id: 4,
    name: "Pepe",
    image: "images/classic/DC-153-400x400.jpg",


  },


  {
    id: 5,
    name: "Mater familias Pouf",
    image: "images/classic/DC-156.jpg",


  },


  {
    id: 6,
    name: "Medor writing desk",
    image: "images/classic/DE-122-400x400.jpg",


  },

  {
    id: 7,
    name: "Salina II",
    image: "images/classic/DE-123.jpg",


  },

  {
    id: 8,
    name: "Helena chair",
    image: "images/classic/DC-031-400x400.jpg",


  },



];


const container = document.getElementById("products-container1");

container.innerHTML = classicProducts.map(
  (p) => `
  <div class="product-card">
 <img 
  src="${p.image}" 
  data-hover="${p.hoverImage}" 
  alt="${p.name}" 
  class="product-img"/>
    <h5>${p.name}</h5>
    <div class="actions">
      <span class="show-details"><i class="fas fa-list-ul"></i> Show Details</span>
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
    // img.addEventListener("mouseenter", () => {
    //   img.src = hoverSrc;
    // });
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











