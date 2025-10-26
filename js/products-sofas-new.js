// sofas

const box = document.createElement("div")
box.className = "container my-5"
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

// تحميل بيانات الأرائك من ملف JSON
let sofas = [];
async function loadSofasData() {
  try {
    const response = await fetch('./data/sofas.json');
    sofas = await response.json();
    renderSofas();
  } catch (error) {
    console.error('خطأ في تحميل بيانات الأرائك:', error);
    // في حالة فشل التحميل، استخدم البيانات الافتراضية
    sofas = [
      { name: "Leclair", link: "./images/sofas/Léclair-2-705x705.jpg", price: 1000, quantity: 0, id: 1 },
      { name: "Cocò L-shape/Corner", link: "./images/sofas/coco-9-705x705.jpg", price: 1700, quantity: 0, id: 2 },
      { name: "Gianduiotto LShape/Corner", link: "./images/sofas/download.jpg", price: 9100, quantity: 0, id: 3 }
    ];
    renderSofas();
  }
}

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

// دالة لعرض الأرائك
function renderSofas() {
  // مسح المحتوى السابق
  row.innerHTML = '';
  
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

    // تأثير التمرير على الصور
    if (sofasHover[index]) {
      img.addEventListener("mouseover", () => {
        img.src = sofasHover[index].link;
      })
      img.addEventListener("mouseout", () => {
        img.src = sofa.link;
      })
    }

    // إضافة للسلة
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
  });
}

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

// دوال مساعدة
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

// إعداد الصفحة
document.body.appendChild(box)
let addedSofas = JSON.parse(localStorage.getItem("cart")) || [];
footer = document.querySelector("footer")
footer.before(box)

// تحميل البيانات عند تحميل الصفحة
loadSofasData();
