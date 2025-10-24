let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let addedToCart = document.querySelector(".addedToCart")
let cartSummary = document.querySelector(".cartSummary")

if (cartArray.length === 0) {
  addedToCart.innerHTML = `<p class="empty">Your cart is empty </p><button class="btnShop"><a class="checklink" href="sofas.html">Shoping Now <i class="fa-solid fa-cart-shopping"></i></a></button>`;
  cartSummary.style.display = "none";
} else {
  display();
}

function totalPrice(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += (arr[i].pprice * arr[i].pquantity);
  }
  return total;
}

function saveAndDesplay() {
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cartArray));
  display();
}

function display() {
  addedToCart.innerHTML = "";
  cartSummary.innerHTML = "";

  if (cartArray.length === 0) {
    addedToCart.innerHTML = `<p>your cart is empty</p><button class="btnShop"><a class="checklink" href="sofas.html">Shoping Now <i class="fa-solid fa-cart-shopping"></i></a></button>`;
    cartSummary.style.display = "none";
    return;
  }

  cartArray.forEach(item => {
    if (item.pquantity > 0) {
      const div = document.createElement("div");
      div.className = "cart_item";

      div.innerHTML = `
    <h1 class="minus"><i class="fa-solid fa-minus"></i></h1>
    <div class="allThree">
    <div class="part1">
        <p>price :<span style="color:#AB1F65"> ${item.pprice * item.pquantity} $</span></p>
     </div> 
  <div class="part2">
     <div class="pdetails" style="display:block;text-align:center;justify-content:center;width:300px">
               <img src=${item.plink}>  <h3>${item.pname}</h3>
     </div>
 </div>
 <div class="part3">
    <p>quantity : <span style="color:#AB1F65"> ${item.pquantity} </span> </p>
 </div>
 </div> 
    <h1 class="plus"><i class="fa-solid fa-plus"></i></h1>
      <div class="trash"><i class="fa-solid fa-trash" id="trash"></i></div>
    `;
      addedToCart.appendChild(div);
      let pplus = div.querySelector(".plus");
      let pminus = div.querySelector(".minus");
      let pdel = div.querySelector(".trash")
      // plus +
      pplus.addEventListener("click", (e) => {
        item.pquantity += 1;
        saveAndDesplay();
      })
      // minus -
      pminus.addEventListener("click", (e) => {
        item.pquantity -= 1;
        if (item.pquantity <= 0) {
          cartArray = cartArray.filter((i) => i.pid !== item.pid);
        }
        saveAndDesplay();
      })
      // Delete x
      pdel.addEventListener("click", (e) => {
        cartArray = cartArray.filter((i) => i.pid !== item.pid);
        saveAndDesplay();
      })
    }

  });
  if (cartArray.length > 0) {
    let text = document.createElement("h4");
    text.className = "tPrice";
    text.innerHTML = `Total Price = <span id="tpriceColor">${totalPrice(cartArray)} $</span>`;

    let btncheck = document.createElement("button");
    btncheck.id = "checkOutBtn";
    btncheck.innerHTML = `<a class="checklink" href="check_out.html">Check Out <i class="fa-solid fa-credit-card"></i></a>`;

    cartSummary.appendChild(text);
    cartSummary.appendChild(btncheck);
    cartSummary.style.display = "block";
  } else {
    addedToCart.innerHTML = `<p class="empty">Your cart is empty</p><button class="btnShop"><a class="checklink" href="sofas.html">Shoping Now <i class="fa-solid fa-cart-shopping"></i></a></button>`;
    cartSummary.style.display = "none";
  }
}

// localStorage.removeItem("cart");
let returnFromCart = document.querySelector(".returnFromCart");
let returnLink = document.createElement("a");

returnLink.href = "./index.html";
returnLink.innerHTML = `go back to home <i class="fa-solid fa-angles-right"></i>`;

returnLink.addEventListener("mouseover", () => {
  returnLink.style.color = "#f32f91ff";
});

returnLink.addEventListener("mouseout", () => {
  returnLink.style.color = "#8938cbff";
});

returnFromCart.appendChild(returnLink);
returnFromCart.style.textAlign = "center";
returnFromCart.style.margin = "5% auto";
returnFromCart.style.marginTop = "15px";