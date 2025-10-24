// tables
const box = document.createElement("div")
box.className = "container my-5"
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)


const tables = [
  { id: 1, name: "Benny", link: "./images/Tables/WEB11-450x450.jpg", price: 1800, quantity: 0 },
  { id: 2, name: "Benny Keramik", link: "./images/Tables/web2-9-450x450.jpg", price: 1000, quantity: 0 },
  { id: 3, name: "Billy", link: "./images/Tables/web1-18-450x450.jpg", price: 1200, quantity: 0 },
  { id: 4, name: "Billy Keramik", link: "./images/Tables/web2-10-450x450.jpg", price: 600, quantity: 0 },
  { id: 5, name: "Billy Wood", link: "./images/Tables/web1-18-450x450.jpg", price: 650, quantity: 0 },
  { id: 6, name: "Diamond Coffee/Side Table", link: "./images/Tables/3-450x450.jpg", price: 700, quantity: 0 },
  { id: 7, name: "Flitch&Grain-Block Table", link: "./images/Tables/webb-1-450x450.jpg", price: 1800, quantity: 0 },
  { id: 8, name: "Flitch&Grain-Blocks Table", link: "./images/Tables/table25.png", price: 2000, quantity: 0 },
  { id: 9, name: "Flitch&Grain-Bold Table", link: "./images/Tables/web2-11-450x450.jpg", price: 2100, quantity: 0 },
  { id: 10, name: "Flitch&Grain-Edge Table", link: "./images/Tables/web2--450x450.jpg", price: 5000, quantity: 0 },
  { id: 11, name: "Flitch&Grain-Falanka SQ Table", link: "./images/Tables/table22.png", price: 1500, quantity: 0 },
  { id: 12, name: "Flitch&Grain-Falanka Table", link: "./images/Tables/table21.png", price: 860, quantity: 0 },
  { id: 13, name: "Flitch&Grain-Sam Table", link: "./images/Tables/web2-12-450x450.jpg", price: 780, quantity: 0 },
  { id: 14, name: "Kare Coffee/Side table", link: "./images/Tables/Kare-coffee-400x400.jpg", price: 1550, quantity: 0 },
  { id: 15, name: "Prizma table set", link: "./images/Tables/Prizma-web2-400x400.jpg", price: 3200, quantity: 0 },
  { id: 16, name: "Scacco", link: "./images/Tables/web-size-template-450x450.jpg", price: 2660, quantity: 0 },
  { id: 17, name: "Sting bb", link: "./images/Tables/web-2-4-450x450.jpg", price: 1580, quantity: 0 },
  { id: 18, name: "Terminal Keramik Premium", link: "./images/Tables/web1-15-450x450.jpg", price: 1850, quantity: 0 },
  { id: 19, name: "Westin", link: "./images/Tables/web1-13-450x450.jpg", price: 6550, quantity: 0 },
  { id: 20, name: "Yago", link: "./images/Tables/web1-11-450x450.jpg", price: 6000, quantity: 0 },
];
const tablesHover = [
  { link: "./images/Tables/4d495a54-60cf-4a80-8f28-6a65dee82436-450x450.jpg" },
  { link: "./images/Tables/web2-9-450x450.jpg" },
  { link: "./images/Tables/2d978fde-7961-4046-9cbd-98a96df3913b-450x450.jpg" },
  { link: "./images/Tables/web2-10-450x450.jpg" },
  { link: "./images/Tables/75F6118D-A12E-47AE-BE58-6B0910CF5F5D-450x450.jpg" },
  { link: "./images/Tables/2-450x450.jpg" },
  { link: "./images/Tables/Web-1-450x450.jpg" },
  { link: "./images/Tables/Blocks-2-450x450.jpg" },
  { link: "./images/Tables/web2-11-450x450.jpg" },
  { link: "./images/Tables/web2--450x450.jpg" },
  { link: "./images/Tables/table22.png" },
  { link: "./images/Tables/table23.png" },
  { link: "./images/Tables/web2-12-450x450.jpg" },
  { link: "./images/Tables/Kare-coffee-400x400.jpg" },
  { link: "./images/Tables/Prizma-web2-400x400.jpg" },
  { link: "./images/Tables/D10D5A74-A8BD-4B94-B9C4-014EEEC27300-450x450.jpg" },
  { link: "./images/Tables/table19.png" },
  { link: "./images/Tables/dc2a9669-4466-4e1e-b3d8-4070612ff848-450x450.jpg" },
  { link: "./images/Tables/table5.png" },
  { link: "./images/Tables/Image-yago-slide-0-450x450.jpeg" },
]


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
tables.forEach((sofa, index) => {
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
        img.src = tablesHover[index].link;
    })
    img.addEventListener("mouseout", () => {
        img.src = sofa.link;
    }) 
        img.addEventListener("click", () => {
        const sofaid = sofas[index].id;
        window.location.href = `sofas-details.html?id=${sofaid}`;

    });
    showDetails.addEventListener("click", () => {
        const sofaid = sofas[index].id;
        window.location.href = `sofas-details.html?id=${sofaid}`;

    });

///////////////////////////////////////////////////
function checkIfExist(id){
  return addedSofas.find(item=>item.pid===id);
}

const showMsg=function(msg,clr){
    const box=document.getElementById("messageBox");
    box.innerHTML=msg;
    box.style.color=clr;
    box.style.backgroundColor="#fff";
    box.style.display="block";
    box.style.opacity="1";
      setTimeout(() => {
    box.style.transition = "opacity 0.5s ease";
    box.style.opacity = "0";
    setTimeout(() => (box.style.display = "none"), 500);
  }, 2000);
}

 addToCart.addEventListener("click",e=>{
    const exist=checkIfExist(sofa.id);
    let colr="black";
    if(exist){
        msg=`already exest <i class="fa-solid fa-triangle-exclamation"></i>`;
        colr="red";
    }
    else{
      addedSofas.push({pid:sofa.id,
                 pquantity:1,
                 pname:sofa.name,
                 plink:sofa.link ,
                 pprice:sofa.price});
      msg=`added successifully <i class="fa-solid fa-check"></i>`;
        colr="green";
      localStorage.setItem("cart",JSON.stringify(addedSofas));
    } 
      showMsg(msg,colr);
 });
//////////////////////////////////////////////////
});

