
const diningProducts = [

  {
    id: 1,
    name: "Arizona",
    image: "images/dining/Copy of web1-14-450x450 (1).jpg",
    hoverImage: "images/dining/1942AE55-658F-4425-94C1-1E67471F7A09-450x450.jpg"

  },

  {
    id: 2,
    name: "Magda Couture",
    image: "images/dining/Web22-2-450x450.jpg",
    hoverImage: "images/dining/WEB-1.jpg"

  },

  {
    id: 3,
    name: "Indy",
    image: "images/dining/Web11-e1586793718975.jpg",
    hoverImage: "images/dining/indy-450x450.jpg"

  },


  {
    id: 4,
    name: "Skorpio Round",
    image: "images/dining/web-8-450x450.jpg",
    hoverImage: "images/dining/web1-6-450x450.jpg"

  },


  {
    id: 5,
    name: "Spyder",
    image: "images/dining/web-9-450x450.jpg",
    hoverImage: "images/dining/web1-7-450x450.jpg"

  },


  {
    id: 6,
    name: "Spyder Keramik",
    image: "images/dining/web-10-450x450.jpg",
    hoverImage: "images/dining/web-11.jpg"

  },


  {
    id: 7,
    name: "Arcadia Couture",
    image: "images/dining/Copy of Web11-1-450x450.jpg",
    hoverImage: "images/dining/Web22.jpg"



  },


  {
    id: 8,
    name: "Magda",
    image: "images/dining/Web22-1.jpg",
    hoverImage: "images/dining/48007B6B-130F-4DD2-851A-5455124155D2.jpg"

  },


];



const container = document.getElementById("products-container1");

container.innerHTML = diningProducts.map(
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











