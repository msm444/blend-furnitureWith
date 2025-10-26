// chairs

const box = document.createElement("div")
box.className = "container my-5 "
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

// تحميل بيانات الكراسي من ملف JSON
let chairs = [];
async function loadChairsData() {
  try {
    const response = await fetch('./data/chairs.json');
    chairs = await response.json();
    renderChairs();
  } catch (error) {
    console.error('خطأ في تحميل بيانات الكراسي:', error);
    // في حالة فشل التحميل، استخدم البيانات الافتراضية
    chairs = [
      { name: "Authentic", link: "./images/chairs/DC-296-DC-297-400x400.jpg", price: 1550, quantity: 0, id: 30 },
      { name: "Captain Chair I", link: "./images/chairs/DC-121.jpg", price: 5000, quantity: 0, id: 32 },
      { name: "Captain Chair II", link: "./images/chairs/DC-156-600x600.jpg", price: 1000, quantity: 0, id: 33 }
    ];
    renderChairs();
  }
}

const chairsHover = [
  { link: "./images/chairs/DC-296-DC-297-400x400.jpg" },
  { link: "./images/chairs/DC-121.jpg" },
  { link: "./images/chairs/DC-156-600x600.jpg" },
  { link: "./images/chairs/1-4-705x705.jpg" },
  { link: "./images/chairs/1-1-705x705.jpg" },
  { link: "./images/chairs/DC-028-600x600.jpg" },
  { link: "./images/chairs/2-705x705.jpg" },
  { link: "./images/chairs/1-5-705x705.jpg" },
  { link: "./images/chairs/Fleur-2-450x450.jpg" },
  { link: "./images/chairs/DC-031-400x400.jpg" },
  { link: "./images/chairs/Hotel-13-450x450.jpg" },
  { link: "./images/chairs/Bar-manhattan-600x600.jpg" },
  { link: "./images/chairs/20-450x450.jpg" },
  { link: "./images/chairs/1-7-450x450.jpg" },
  { link: "./images/chairs/1-3-450x450.jpg" },
  { link: "./images/chairs/Puella-5-450x450.jpg" },
  { link: "./images/chairs/DC-083-400x400.jpg" },
  { link: "./images/chairs/DC-166-RL-400x400.jpg" },
  { link: "./images/chairs/Undone-450x450.jpg" },
  { link: "./images/chairs/DC-188-400x400.jpg" },
  { link: "./images/chairs/1-3-450x450.jpg" },
  { link: "./images/chairs/adjusted1-705x705.jpg" },
  { link: "./images/chairs/DC-166-RL-400x400.jpg" },
  { link: "./images/chairs/JACOB_1004-400x400.jpg" },
  { link: "./images/chairs/Jacob-2-450x450.jpg" },
  { link: "./images/chairs/U_STROZZ_CARD_4-400x400.jpg" },
];

// دالة لعرض الكراسي
function renderChairs() {
  // مسح المحتوى السابق
  row.innerHTML = '';
  
  chairs.forEach((chair, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const card = document.createElement("div")
    card.className = "card h-100 border-0"
    card.style.cursor = "pointer"

    const img = document.createElement("img")
    img.src = chair.link;
    img.className = "card-img-top"

    const cardBody = document.createElement("div")
    cardBody.className = "card-body text-center p-1 "

    const title = document.createElement("h3")
    title.className = "title "
    title.innerHTML = chair.name;
    title.style.fontSize = "15px"

    const cardRear = document.createElement("div")
    cardRear.className = "card-rear d-flex justify-content-between p-2 text-center align-items-center";

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
    card.appendChild(cardRear)
    card.appendChild(addToCart)
    cardBody.appendChild(title)
    cardBody.appendChild(showDetails)
    cardRear.appendChild(showDetails)
    cardRear.appendChild(whishList)
    row.appendChild(col)
    col.appendChild(card)

    // تأثير التمرير على الصور
    if (chairsHover[index]) {
      img.addEventListener("mouseover", () => {
        img.src = chairsHover[index].link;
      })
      img.addEventListener("mouseout", () => {
        img.src = chair.link
      });
    }

    // إضافة للسلة
    addToCart.addEventListener("click", e => {
      const exist = checkIfExist(chair.id);
      let colr = "black";
      if (exist) {
        msg = `already exest <i class="fa-solid fa-triangle-exclamation"></i>`;
        colr = "red";
      }
      else {
        addedChairs.push({
          pid: chair.id,
          pquantity: 1,
          pname: chair.name,
          plink: chair.link,
          pprice: chair.price
        });
        msg = `added successifully <i class="fa-solid fa-check"></i>`;
        colr = "green";
        localStorage.setItem("cart", JSON.stringify(addedChairs));
      }
      showMsg(msg, colr);
    });
  });
}

footer = document.querySelector("footer")

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

let addedChairs = JSON.parse(localStorage.getItem("cart")) || [];

footer.before(box)

// دوال مساعدة
function checkIfExist(id) {
  return addedChairs.find(item => item.pid === id);
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

// تحميل البيانات عند تحميل الصفحة
loadChairsData();
