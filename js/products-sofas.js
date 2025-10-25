// sofas

const box = document.createElement("div")
box.className = "container my-5"
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

const sofas = [
  { name: "Leclair", link: "./images/sofas/Léclair-2-705x705.jpg", price: 1000, quantity: 0, id: 1 },
  { name: "Cocò L-shape/Corner", link: "./images/sofas/coco-9-705x705.jpg", price: 1700, quantity: 0, id: 2 },
  { name: "Gianduiotto LShape/Corner", link: "./images/sofas/download.jpg", price: 9100, quantity: 0, id: 3 },
  { name: "Sir William", link: "./images/sofas/4-5-450x450.jpg", price: 1200, quantity: 0, id: 4 },
  { name: "Gianduiotto Sofa", link: "./images/sofas/2-6-450x450.jpg", price: 2080, quantity: 0, id: 5 },
  { name: "Lazy LShape/Corner", link: "./images/sofas/4-3-450x450.jpg", price: 3400, quantity: 0, id: 6 },
  { name: "Cocò Sofa", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg", price: 6094, quantity: 0, id: 7 },
  { name: "Eliseo Sofa", link: "./images/sofas/7-1-450x450.jpg", price: 980, quantity: 0, id: 8 },
  { name: "Banjo Sofa", link: "./images/sofas/Banjo-1-450x450.jpg", price: 4000, quantity: 0, id: 8 },
  { name: "Banjo L-Shape/Corner", link: "./images/sofas/2-450x450.jpg", price: 6000, quantity: 0, id: 9 },
  { name: "Genius Sofa", link: "./images/sofas/Genius-10-450x450.jpg", price: 800, quantity: 0, id: 10 },
  { name: "Toby Wing L-Shape", link: "./images/sofas/download.jpg", price: 6000, quantity: 0, id: 11 },
  { name: "Nicolas L-Shape/Corner", link: "./images/sofas/10-2-705x705.jpg", price: 8000, quantity: 0, id: 12 },
  { name: "Venere", link: "./images/sofas/1-2-705x705.jpg", price: 1000, quantity: 0, id: 13 },
  { name: "Toby Wing", link: "./images/sofas/12-705x705.jpg", price: 900, quantity: 0, id: 14 },
  { name: "Nicolas", link: "./images/sofas/undone-705x705.jpg", price: 5000, quantity: 0, id: 15 },
  { name: "Mater familias Daybed", link: "./images/sofas/4-705x705.jpg", price: 4800, quantity: 0, id: 16 },
  { name: "Mater familias", link: "./images/sofas/3-705x705.jpg", price: 6700, quantity: 0, id: 17 },
  { name: "Art nouveau", link: "./images/sofas/1-1-705x705.jpg", price: 3000, quantity: 0, id: 18 },
  { name: "Taylor Lshape", link: "./images/sofas/Taylor-white-705x705.jpg", price: 2000, quantity: 0, id: 19 },
  { name: "Paride L-Shape/Corner", link: "./images/sofas/paride-2-705x705.jpg", price: 7860, quantity: 0, id: 20 },
  { name: "Paride", link: "./images/sofas/paride-4-1-705x705.jpg", price: 9999, quantity: 0, id: 21 },
  { name: "Elisir L-Shape/Corner", link: "./images/sofas/elisir-on-705x705.jpg", price: 8600, quantity: 0, id: 22 },
  { name: "Fleur", link: "./images/sofas/Fleur-1-705x705.jpg", price: 4500, quantity: 0, id: 23 },
  { name: "Matheola LShape/Corner", link: "./images/sofas/Matheola-1-705x705.jpg", price: 6999, quantity: 0, id: 24 },
  { name: "Coco", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg", price: 8750, quantity: 0, id: 25 },
  { name: "Matheola", link: "./images/sofas/Matheola-10-705x705.jpg", price: 7777, quantity: 0, id: 26 },
  { name: "Fox trot", link: "./images/sofas/Fox-trot-1-705x705.jpg", price: 6760, quantity: 0, id: 27 },
  { name: "Romeo Relax LShape/Corner", link: "./images/sofas/paride-2-705x705.jpg", price: 6555, quantity: 0, id: 28 },
  { name: "Elisir", link: "./images/sofas/Elisir-web-705x705.jpg", price: 5550, quantity: 0, id: 29 }
];

const sofasHover = [
  { link: "./images/sofas/Léclair-1-705x705.jpg" },
  { link: "./images/sofas/coco-9-705x705.jpg" },
  { link: "./images/sofas/download.jpg" },
  { link: "./images/sofas/1-6-450x450.jpg" },
  { link: "./images/sofas/2-6-450x450.jpg" },
  { link: "./images/sofas/3-3-450x450.jpg" },
  { link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg" },
  { link: "./images/sofas/2-1-450x450.jpg" },
  { link: "./images/sofas/3-450x450.jpg" },
  { link: "./images/sofas/2-450x450.jpg" },
  { link: "./images/sofas/Genius-2-450x450.jpg" },
  { link: "./images/sofas/18.jpg" },
  { link: "./images/sofas/3-9.jpg" },
  { link: "./images/sofas/1-1-500x500.jpg" },
  { link: "./images/sofas/5.jpg" },
  { link: "./images/sofas/5-6.jpg" },
  { link: "./images/sofas/27.jpg" },
  { link: "./images/sofas/234.jpg" },
  { link: "./images/sofas/4.jpg" },
  { link: "./images/sofas/Taylor-web4.jpg" },
  { link: "./images/sofas/paride-3.jpg" },
  { link: "./images/sofas/paride-4-1-705x705.jpg" },
  { link: "./images/sofas/Elisir7.jpg" },
  { link: "./images/sofas/Fleur-3.jpg" },
  { link: "./images/sofas/Matheola-4.jpg" },
  { link: "./images/sofas/cal-1018_cocò-3-1030x1028.jpg" },
  { link: "./images/sofas/Matheola-11.jpg" },
  { link: "./images/sofas/Fox-trot-3.jpg" },
  { link: "./images/sofas/2-12.jpg" },
  { link: "./images/sofas/Elisir2.jpg" }
];


function createMsg() {
  let crMsg = document.createElement("div");
  crMsg.id = "messageBox";
  crMsg.style.position = "fixed";
  crMsg.style.top = "20px";
  crMsg.style.left = "50%";
  crMsg.style.transform = "translateX(-50%)";
  crMsg.style.backgroundColor = "#AB1F65";
  crMsg.style.color = "#fff";
  crMsg.style.padding = "10px 25px";
  crMsg.style.borderRadius = "10px";
  crMsg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  crMsg.style.display = "none";
  crMsg.style.zIndex = "9999";
  document.body.appendChild(crMsg);
}
createMsg();

document.body.appendChild(box)

let addedSofas = JSON.parse(localStorage.getItem("cart")) || [];

footer = document.querySelector("footer")
footer.before(box)
sofas.forEach((sofa, index) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const card = document.createElement("div")
  card.className = "card h-100 border-0"
  card.style.cursor = "pointer"

  const img = document.createElement("img")
  img.src = sofa.link;
  img.className = "card-img-top"
  img.style.backgroundSize = "cover";
  img.style.backgroundPosition = "center";

  const cardBody = document.createElement("div")
  cardBody.className = "card-body text-center p-1"

  const title = document.createElement("h3")
  title.className = "title "
  title.innerHTML = sofa.name;
  title.style.fontSize = "15px"
  title.style.marginTop = "15px"
  title.style.marginBottom = "15px"


  const cardRear = document.createElement("div")
  cardRear.className = "card-rear d-flex justify-content-between p-3 text-center align-items-center";

  const showDetails = document.createElement("span")
  showDetails.className = "show-details d-flex justify-content-left item-center text-nowrap";
  showDetails.innerHTML = '<i class="fa-solid fa-list-ul d-flex align-self-center "></i> Show Details';
  showDetails.style.fontSize = "11px"
  showDetails.style.fontWeight = "700"

  const whishList = document.createElement("span")
  whishList.className = "whish-list d-flex flex-row justify-content-left item-center text-nowrap";
  whishList.innerHTML = '<i class="fa-regular fa-star d-flex align-self-center"></i> Add To Wishlist';
  whishList.style.fontSize = "11px"
  whishList.style.fontWeight = "700"


  const addToCart = document.createElement("button")
  addToCart.className = "add-to-card d-flex align-items-center align-self-center text-end shadow"
  addToCart.innerHTML = "Add To Card"
  addToCart.style.color = "#fff"
  addToCart.style.backgroundColor = "#AB1F65"
  addToCart.style.border = "none"
  addToCart.style.borderRadius = "50px"
  addToCart.style.width = "80%"
  addToCart.style.height = "50px"
  addToCart.style.justifyContent = "center"
  addToCart.style.margin = "30px"


  addToCart.addEventListener("mouseover", () => {
    addToCart.style.width = "85%"
    addToCart.style.transition = "All 0.5s ease";
    addToCart.style.opacity = 0.7;
  });
  addToCart.addEventListener("mouseout", () => {
    addToCart.style.width = "80%"
    addToCart.style.transition = "All 0.5s ease";
    addToCart.style.opacity = 1;
  });

  card.appendChild(img)
  card.appendChild(cardBody)
  card.append(cardRear)
  card.append(addToCart)
  cardBody.appendChild(title)
  cardBody.appendChild(showDetails)
  cardRear.appendChild(showDetails)
  cardRear.appendChild(whishList)
  row.appendChild(col)
  col.appendChild(card)


  img.addEventListener("mouseover", () => {
    img.src = sofasHover[index].link;
  })
  img.addEventListener("mouseout", () => {
    img.src = sofa.link;
  })
  // img.addEventListener("click", () => {
  //   const sofaid = sofas[index].id;
  //   window.location.href = `sofas-details.html?id=${sofaid}`;

  // });
  // showDetails.addEventListener("click", () => {
  //     const sofaid = sofas[index].id;
  //     window.location.href = `sofas-details.html?id=${sofaid}`;

  // });

  ///////////////////////////////////////////////////
  function checkIfExist(id) {
    return addedSofas.find(item => item.pid === id);
  }

  const showMsg = function (msg, clr) {
    const box = document.getElementById("messageBox");
    box.innerHTML = msg;
    box.style.color = clr;
    box.style.backgroundColor = "#fff";
    box.style.display = "block";
    box.style.opacity = "1";
    setTimeout(() => {
      box.style.transition = "opacity 0.5s ease";
      box.style.opacity = "0";
      setTimeout(() => (box.style.display = "none"), 500);
    }, 2000);
  }

  addToCart.addEventListener("click", e => {
    const exist = checkIfExist(sofa.id);
    let colr = "black";
    if (exist) {
      msg = `already exest <i class="fa-solid fa-triangle-exclamation"></i>`;
      colr = "red";
    }
    else {
      addedSofas.push({
        pid: sofa.id,
        pquantity: 1,
        pname: sofa.name,
        plink: sofa.link,
        pprice: sofa.price
      });
      msg = `added successifully <i class="fa-solid fa-check"></i>`;
      colr = "green";
      localStorage.setItem("cart", JSON.stringify(addedSofas));
    }
    showMsg(msg, colr);
  });

  //////////////////////////////////////////////////

});



