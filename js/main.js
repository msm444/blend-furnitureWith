// onloading
let loded = document.querySelector(".load")
if (loded) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            loded.remove()
            document.body.style.opacity = "1";
            document.body.style.transform = "none";
        }, 500)
    })
}

setTimeout(() => {
    let welcomeMsg = document.createElement("div");
    welcomeMsg.textContent = " أهلاً بك في معرض الأثاث! تصفّح أحدث العروض الآن.";
    welcomeMsg.style.cssText = `
    position: fixed;
    top: 50%;
    right: 20px;
    background-color: #AB1F65;
    color: white;
    font-family: sans-serif;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: 9999;
    transform:translateX(100%)
  `;
    document.body.appendChild(welcomeMsg);
    setTimeout(() => {
        welcomeMsg.style.opacity = "1";
        welcomeMsg.style.transform = "translateX(0%)";

    }, 100);

    setTimeout(() => {
        welcomeMsg.style.opacity = "0";
        setTimeout(() => welcomeMsg.remove(), 600);
    }, 2000);
}, 400);
// show and hidden menu
let menuToggle = document.querySelector(".menu-toggle")
let list = document.querySelector(".links")
let closeBtn = document.querySelector(".close-btn")

menuToggle.addEventListener("click", () => {
    list.style.transform = "scale(1)"
})

closeBtn.addEventListener("click", () => {
    list.style.transform = "scale(0)"
})

// *******btn toup***********
let btnUp = document.createElement("button")
btnUp.innerHTML = `<i class="fa-solid fa-circle-up"></i>`
btnUp.style.cssText = `color: var(--sec-color);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 2rem;
    position:fixed;
    right:5px;
    ;bottom:30px;padding:0`
document.body.append(btnUp)
btnUp.onclick = () => {
    window.scrollTo({
        top: 0

    })
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        btnUp.style.display = "block"
    }
    else {
        btnUp.style.display = "none"
    }
});

/// ****************droplist for prosducts*********
let products = document.querySelector(".products")
let dropdownList = document.querySelector(".dropdown-List")
dropdownList.style.display = "none"
let items = [
    { name: "sofas", link: "sofas.html" },
    { name: "chairs", link: "chairs.html" },
    { name: "tables", link: "tables.html" },
    { name: "dining", link: "dining.html" },
    { name: "complements", link: "complements.html" },
    { name: "fierplaces", link: "404.html" },
    { name: "classic", link: "classic.html" },
];
// create element in droplist
items.forEach(items => {
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.href = items.link;
    a.innerHTML = items.name;
    a.style.cssText = "color:#1f1f1;padding-left: 50px;"
    a.style.textDecoration = "none"
    li.appendChild(a);
    dropdownList.appendChild(li)
})
products.appendChild(dropdownList)
products.addEventListener("click", function () {
    dropdownList.classList.toggle("hidden")
})


let links = document.querySelectorAll(".links a")
links.forEach((a) => {
    a.addEventListener("click", (e) => {
        links.forEach((el) => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
    })
}
)
//shopping section
let btnShopping = document.createElement("button");
btnShopping.className = "cart-toggle";
btnShopping.style.cssText = `color: white;
    background: var(--sec-color);
    border: none;
    padding: 7px;
    position: fixed;
    top: 50%;
    z-index:1000;
    font-size: 1.3rem;
    border-radius: 4px;
    cursor: pointer;color:white`;

let cardLink = document.createElement("a");
cardLink.href = `cart.html`;
cardLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
cardLink.style.color = "white";
btnShopping.append(cardLink);
document.body.prepend(btnShopping);

// style for background landing
let backGround = document.querySelector(".land-img")
if (backGround) {
    backGround.style.width = "100%"
    backGround.parentElement.style.cssText = "position:relative;overflow:hidden"
    backGround.nextElementSibling.style.cssText = `position:absolute;top: 50%;z-index: 10;left: 50%;width: 100vw;transform: translate(-50%,-50%);
`}

///************wrap image****************///
let images = [
    { src: "images/Home/home06.jpg", data: "sofas" },
    { src: "images/Home/home07.jpg", data: "recliners" },
    { src: "images/Home/home08.jpg", data: "dinin Tables" },
    { src: "images/Home/home07.jpg", data: "chairs" },
    { src: "images/Home/home06.jpg", data: "coffee tables" }
];
let ul = document.querySelector(".wrap-img");
if (ul) {
    images.forEach(image => {
        // create Element
        let li = document.createElement("li")
        let a = document.createElement("a")
        let img = document.createElement("img");
        img.src = image.src;
        a.setAttribute("data-text", image.data);
        a.append(img)
        li.append(a)
        ul.append(li)

    })
}
// *********feature****
let feature = document.querySelector(".feature")
let heading = document.createElement("img")
if (heading) {
    heading.style.cssText = `max-width:100%;transform: translateY(70px);transition:.5s`
    heading.className = "head"
    heading.src = 'images/Home/home10.jpg'
}
if (feature) {
    feature.style.cssText = `text-align:center;padding:100px 0;`
    feature.prepend(heading)
}

// moving in scroll 
const observHead = new IntersectionObserver(e => {
    e.forEach(img => {
        if (img.isIntersecting) {
            img.target.style.transform = "translateY(0)";
        } else {
            img.target.style.transform = "translateY(70px)";
        }
    })
})
observHead.observe(heading)
// create cards
let featContainer = document.querySelector(".feature .container")
let cardImg = [
    { link: "images/Home/home11.png", name: "venere", price: 2500, quantity: 0, id: 57 },
    { link: "images/Home/home12.png", name: "Mater familias Daybed", price: 3000, quantity: 0, id: 58 },
    { link: "images/Home/home14.png", name: "dinin Tables", price: 8000, quantity: 0, id: 59 },
    { link: "images/Home/home20.png", name: "Jacob Chair", price: 1000, quantity: 0, id: 60 },
    { link: "images/Home/home19.png", name: "Niobe", price: 9000, quantity: 0, id: 61 },
    { link: "images/Home/home25.png", name: "Belle Epoque", price: 7000, quantity: 0, id: 62 }
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

let addedProducts = JSON.parse(localStorage.getItem("cart")) || [];


if (featContainer) {
    let cards = document.createElement("div");
    cards.className = "cards";
    cardImg.forEach((e) => {
        ///card
        let card = document.createElement("div");
        card.className = "card";
        // img in card
        let img = document.createElement("img");
        img.src = e.link;
        // title in card
        let title = document.createElement("h3");
        title.textContent = e.name;
        // btn-actions
        let btnActions = document.createElement("div");
        btnActions.className = "btn-actions";
        btnActions.innerHTML = `<button class="btn show-details" type="button">
                  <i class="fa-solid fa-file-lines"></i>
                  Show details
                </button>
                <button class="btn btn--primary" type="button">
                  <i class="fa-regular fa-star"></i>
                  Add to wishlist
                </button>`;

        // add card
        let btnAdd = document.createElement("button");
        btnAdd.textContent = "Add To Card";
        btnAdd.className = "add-to-card";
        btnAdd.style.cssText = `color: rgb(255, 255, 255);
    background-color: rgb(171, 31, 101);
    border: none;
    border-radius: 50px;
    width: 80%;
    height: 50px;
    justify-content: center;
    margin: 30px;
    transition: all 0.5s ease 0s;
    opacity: 1;cursor:pointer`;

        btnAdd.addEventListener("mouseenter", () => {
            btnAdd.style.transform = "translateY(-3px)";
            btnAdd.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
        });
        btnAdd.addEventListener("mouseleave", () => {
            btnAdd.style.transform = "translateY(0)";
            btnAdd.style.boxShadow = "";
        });

        // add to dom
        card.append(img, title, btnActions, btnAdd);
        cards.append(card);
        featContainer.append(cards);


        ///////////////////////////////////////////////////
        function checkIfExist(id) {
            return addedProducts.find(item => item.pid === id);
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

        btnAdd.addEventListener("click", () => {
            const exist = checkIfExist(e.id);
            let colr = "black";
            if (exist) {
                msg = `already exest <i class="fa-solid fa-triangle-exclamation"></i>`;
                colr = "red";
            }
            else {
                addedProducts.push({
                    pid: e.id,
                    pquantity: 1,
                    pname: e.name,
                    plink: e.link,
                    pprice: e.price
                });
                msg = `added successifully <i class="fa-solid fa-check"></i>`;
                colr = "green";
                localStorage.setItem("cart", JSON.stringify(addedProducts));
            }
            showMsg(msg, colr);
        });

        //////////////////////////////////////////////////

    });
}


//******brand section*******//
let brandContainer = document.querySelector("#brands .container")
let brandImge = [
    { src: "images/Home/home32.png" },
    { src: "images/Home/home31.png" },
    { src: "images/Home/home34.png" },
    { src: "images/Home/home29.png" },
    { src: "images/Home/home30.png" },
    { src: "images/Home/home27.png" },
]
if (brandContainer) {
    // head brand
    let headImge = document.createElement("img")
    headImge.src = `images/Home/home26.jpg`
    brandContainer.style.textAlign = "center"
    brandContainer.append(headImge)
    let brandoserv = new IntersectionObserver(imgs => {
        imgs.forEach(img => {
            if (img.isIntersecting) {
                headImge.style.cssText = `transition:1s;opacity:1;transform:translateY(0);max-width:100%`
            }
            else {
                headImge.style.cssText = `opacity:0;transform:translateY(30px);max-width:100%`
            }
        })
    })

    brandoserv.observe(headImge)
    // create brands logo
    let logos = document.createElement("div")
    brandImge.forEach(img => {
        // create img 
        let logo = document.createElement("img")
        logo.style.maxWidth = "100%"
        logo.src = img.src
        logos.append(logo)
        brandContainer.append(logos)
    })
}

// ***********footer********
let footer = document.querySelector("footer")
let p = document.createElement("p")
let year = new Date().getFullYear()
p.textContent = `
© Copyright ${year} - Blend Furniture - Design & powered by NTI`
p.style.cssText = `text-align:center;padding:15px;background:var(--bg-color-dark);color:var(--sec-txt-dark);font-size: .8rem;`
footer.append(p)

let chairss = [{ id: 1, name: "Authentic", link: "./images/chairs/DC-296-DC-297-400x400.jpg", model: "Chair: DC 296", description: "Foot Stool: DC 297" },
{ id: 2, name: "Captain Chair I", link: "./images/chairs/DC-121.jpg", model: "DC 121", description: "CAPTAIN  CHAIR" },
{ id: 3, name: "Captain Chair II", link: "./images/chairs/DC-156-600x600.jpg", model: "DC 156", description: "COLONIAL SWIVEL" },
{ id: 4, name: "Chanel Chair", link: "./images/chairs/chanel3.jpg", model: "Chanel CAL 1031", description: "A functional and distinctive piece of furniture, Calia Italia’s new armchair is enhanced by squared though soft lines and a strong character, thus combining comfort and versatility." },
{ id: 5, name: "Coco Chair", link: "./images/chairs/coco-3-705x705.jpg", model: "Cocò CAL 1018", description: "Cocò is an elegant armchair with compact dimensions. It is characterised by slender metal feet (inserted into the armrests) that become an integral part of the design, giving the model great appeal." },
{ id: 6, name: "Colina Chair", link: "./images/chairs/DC-028-600x600.jpg", model: "DC 028", description: "TULIP CARVING NO ARM" },
{ id: 7, name: "Deliziosa Chair", link: "./images/chairs/1-705x705.jpg", model: "DELIZIOSA CAL 997", description: "Thanks to its wide and embracing seating area, the Deliziosa guarantees an excellent ergonomic" },
{ id: 8, name: "Ferula", link: "./images/chairs/5-4-705x705.jpg", model: "Ferula", description: "The Ferula chair, an iconic design element, is the result of a cooperation between designers from Lucania and Apulia and students from the Politecnico di Milano. The Ferula strongly evokes Matera, its territory and the life-style of men and women living in its ancient neighborhoods, the Sassi." },
{ id: 9, name: "Fleur Chair", link: "./images/chairs/Fleur-FBWeb-450x450.jpg", model: "Fleur.1106", description: "With its elegant, peculiar design, the Fleur features pin-shaped legs and sophisticated decorative stitches. Such distinctive traits and compact proportions will definitely enhance also small living rooms and will be perfect for contract business." },
{ id: 10, name: "Helena Chair", link: "./images/chairs/DC-031-400x400.jpg", model: "DC 031", description: "RAFFLES CROSS NO ARM" },
{ id: 11, name: "Hotel Chair", link: "./images/chairs/Hotel-31-705x705.jpg", model: "Hotel", description: "Styled with vague “deco art” lines and shapes, a shell to find refuge in, Hotel is one of Calia Italia ageless classics." },
{ id: 12, name: "Maanhattan Bar Set", link: "./images/chairs/Bar-manhattan-600x600.jpg", model: "Chair: DC 128", description: "" },
{ id: 13, name: "Mater Familias Pouf", link: "./images/chairs/23-705x705.jpg", model: "Mater familias CAL 1139", description: "Mater Familias is the result of a project called Architecture of Shame, created together with Matera European Capital of Culture 2019. The project is based on the idea of the mother who is the real core component of a family and started from the Day Bed model, inspired by the psychotherapist’s couch, that portrays multilayers cushions and copper-coloured feet. The thin and light structure, together with the elegantly designed leg, represent some reference elements for the whole collection with the difference that in this model, there is a multilayered cushion that recalls all the ages of the Matera’s history. The visible stitches have been realised following a cross pattern, to remind the closure of the old bags of grain, and they all have been handcrafted in order to pay tribute once again to the feminine craftsmanship." },
{ id: 14, name: "Nicols Chair", link: "./images/chairs/1-7-450x450.jpg", model: "Nicolas PRM 1121", description: "The Nicolas model also includes an armchair version, which is a compact seat that differs from the sofa with its fixed back and small-size." },
{ id: 15, name: "Piroutte Chair", link: "./images/chairs/1-3-450x450.jpg", model: "Pirouette CAL 1157", description: "Pirouette is an elegant armchair with compact dimensions. It is characterised by slender feet that become an integral part of the design, giving the model great appeal." },
{ id: 16, name: "Puella Chair", link: "./images/chairs/Puella-4-web-3-450x450.jpg", model: "PUELLA.1070/1071", description: "" },
{ id: 17, name: "Salina I", link: "./images/chairs/DC-083-400x400.jpg", model: "DC 083", description: "SALINA CHAIR" },
{ id: 18, name: "Salina II", link: "./images/chairs/DC-166-RL-400x400.jpg", model: "DC 166 RL", description: "SALINA RATTAN" },
{ id: 19, name: "sandy Chair", link: "./images/chairs/adjusted2-450x450.jpg", model: "Sandy CAL 791", description: "Elegance and accuracy live together in this chair with undisputable comfort." },
{ id: 20, name: "Talia Chair", link: "./images/chairs/DC-188-400x400.jpg", model: "Venere CAL 1149", description: "A taste of Venus can found in the armchair, small armchair, footstool and bench versions that all present the same essential style of the sofa model. The armchair takes on the slim and enveloping structure of the model as well as the soft cushion for the seat whilst the small armchair also includes a back cushion, designed to offer a remarkable comfort experience despite its small size. It is perfect even for smaller environments. The footstool and bench versions, characterised by the fork foot typical of the collection, give the possibility to furnish the space with the most suitable composition for one’s needs. The footstools are in fact available in rectangular and round shapes – while the bench, which is longer and less deep, can be used as a bench in the living area or as a backrest to furnish sleeping areas." },
{ id: 21, name: "Venere Chair", link: "./images/chairs/4-2-705x705.jpg", model: "Venere CAL 1149", description: "A taste of Venus can found in the armchair, small armchair, footstool and bench versions that all present the same essential style of the sofa model. The armchair takes on the slim and enveloping structure of the model as well as the soft cushion for the seat whilst the small armchair also includes a back cushion, designed to offer a remarkable comfort experience despite its small size. It is perfect even for smaller environments. The footstool and bench versions, characterised by the fork foot typical of the collection, give the possibility to furnish the space with the most suitable composition for one’s needs. The footstools are in fact available in rectangular and round shapes – while the bench, which is longer and less deep, can be used as a bench in the living area or as a backrest to furnish sleeping areas." },
{ id: 22, name: "Deliziante Chair", link: "./images/chairs/Deliziante-featured-copy-705x705.jpg", model: "Delizante CAL 1000", description: "Capitonné upholstery both on the seating area and on the whole structure further enhances the Deliziante easy chair, to become an icon of elegance, symbol of the artisan care for details. that characterizes at product of Calia Italia collection." },
{ id: 23, name: "Grand Hotel Chair", link: "./images/chairs/adjusted2-705x705.jpg", model: "", description: "An “evergreen” chair perfectly balancing tradition and classicism. with its distinctive compact volumes of the seat-back and beechwood massive frame, Grand hotel will be the main feature in any living room." },
{ id: 24, name: "Jacob Chair", link: "./images/chairs/1004_cal-jacob-web-1-e1544894001500-450x450.jpg", model: "Jacob CAL 1004", description: "High back, soft feather seat, creates the ultimate comfort: Jacob the new Calia Italia Chair, perfectly matches the classic style of the bergere, reading armchairs, through being reinterpreted with a contemporary trendy design that wisely merges natural leathers or precious fabrics." },
{ id: 25, name: "Jacob Chair", link: "./images/chairs/jacob-1-705x705.jpg", model: "Jacob CAL 1004", description: "This special edition of the Jacob Arm chair, features a back covered in the best quality Italian leather and the interior back and seat in a superior quality Italian fabric." },
{ id: 26, name: "U'Strozz", link: "./images/Chairs/U_STROZZ-featured-600x600.jpg", model: "", description: "U’Strozz, meaning “cloth” in the dialect of Matera, is the new footstool made by several layers of leather or fabric production scraps in different colors, hold together by a book stool nylon belt. Each leather or fabric layer wraps a polyurethane sheet that gives the whole project an unexpected comfort." }
    , { name: "Leclair", link: "./images/sofas/Léclair-2-705x705.jpg", id: 1, model: "L’éclair CAL 1243", description: "The model stands out for its sculptural yet soft volumes. This characteristic gives the product an attractive and modern look, ideal for those seeking innovative design without sacrificing comfort. The Èclair, available in 2-seater and ½, 3-seater, and maxi 3-seater versions, is finished with perimeter piping that embellishes the backrests and armrests, along with decorative stitching on the front of the seat." },
{ name: "Cocò L-shape/Corner", link: "./images/sofas/coco-9-705x705.jpg", id: 2, model: "Cocò CAL 1018", description: "Cocò is an elegant armchair with compact dimensions. It is characterised by slender metal feet (inserted into the armrests) that become an integral part of the design, giving the model great appeal." },
{ name: "Gianduiotto LShape/Corner", link: "./images/sofas/download.jpg", id: 3, model: "Gianduiotto CAL 1167", description: "The main characteristic of Gianduiotto is versatility. The backrest and armrest of the sofa can be freely positioned to allow multiple sitting positions, including vis-à-vis as well as a position for lying.It is a sofa with an open and unstructured nature which, together with its decorative, design embellishing stitching, lends itself perfectly to the centre of a room." },
{ name: "Sir William", link: "./images/sofas/4-5-450x450.jpg", id: 4, model: "Sir William", description: "With its curvy profile, capitonné patterns and maximum comfort, Sir William evokes sophisticated bon ton atmospheres. A leather covered unique sofa that has become synonymous with high quality craftsmanship." },
{ name: "Gianduiotto Sofa", link: "./images/sofas/2-6-450x450.jpg", id: 5, model: "Gianduiotto CAL 1167", description: "The main characteristic of Gianduiotto is versatility. The backrest and armrest of the sofa can be freely positioned to allow multiple sitting positions, including vis-à-vis as well as a position for lying.It is a sofa with an open and unstructured nature which, together with its decorative, design embellishing stitching, lends itself perfectly to the centre of a room." },
{ name: "Lazy LShape/Corner", link: "./images/sofas/4-3-450x450.jpg", id: 6, model: "Lazy CAL 1107_2", description: "The model includes a touch control recliner version that can lift the footboard and increase the depth of the seat and there is also a large corner footstool that allows for simultaneous operation of the mechanisms of both adjacent armchairs. Indeed, it can be transformed into a comfortable seat thanks to the ballasted mobile backrest that can be positioned as desired." },
{ name: "Cocò Sofa", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg", id: 7, model: "Cocò CAL 1018", description: "Cocò is an elegant armchair with compact dimensions. It is characterised by slender metal feet (inserted into the armrests) that become an integral part of the design, giving the model great appeal." },
{ name: "Eliseo Sofa", link: "./images/sofas/7-1-450x450.jpg", id: 8, model: "Eliseo PRM 1127", description: "With a design conceived down to the smallest detail, Eliseo is a modular sofa by Calia Italia that guarantees an unparalleled comfort experience. Thanks to a flexible backrest that adapts to the weight of your body, along with a wide seat characterised by rounded corners that become armrests, Eliseo is designed to wrap around you in a style that will conquer all your senses." },
{ name: "Banjo Sofa", link: "./images/sofas/Banjo-1-450x450.jpg", id: 9, model: "Banjo PRM 1087", description: "Thanks to the typical squared quilted pattern and a wide range of bright colors, the Banjo is the ideal choice to furnish evolving living spaces. Being modular and therefore extremely versatile, this model can be arranged so to create numberless configurations, from a single unit to be used as a chair up to large corner compositions that will make it perfect for every need." },
{ name: "Banjo L-Shape/Corner", link: "./images/sofas/2-450x450.jpg", id: 10, model: "Banjo PRM 1097", description: "Thanks to the typical squared quilted pattern and a wide range of bright colors, the Banjo is the ideal choice to furnish evolving living spaces. Being modular and therefore extremely versatile, this model can be arranged so to create numberless configurations, from a single unit to be used as a chair up to large corner compositions that will make it perfect for every need." },
{ name: "Genius Sofa", link: "./images/sofas/Genius-10-450x450.jpg", id: 11, model: "Genius Cal 1072", description: "The Genius Loci, also available in a chaise-longue configuration. Features a stylish shape. Further, enhanced by slender armrests and elegant feet. The model Is equipped with a mechanism which allows the seat depth and the back height to be increased by 78 cm." },
{ name: "Toby Wing L-Shape", link: "./images/sofas/download.jpg", id: 12, model: "Toby Wing PRM 1161", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Nicolas L-Shape/Corner", link: "./images/sofas/10-2-705x705.jpg", id: 13, model: "Nicolas PRM 1121", description: "Nicolas is a modern sofa, featuring distinctive traits and a rigorous design wisely combined to a soft padding. Equipped with manually liftable headrests, the sofa is also available as a recliner or motion, that allows the seat to be extended by 40 cm, turning it into a chaise longue. The recliner version is also available on the extra large seats, that can comfortably host two people." },
{ name: "Venere", link: "./images/sofas/1-2-705x705.jpg", id: 14, model: "Venere CAL 1149", description: "Created as an interpretation of the Mater Familias collection but with more of an Italian taste, Venus represents the most essential model of this collection. Its thin and enchanting structure houses soft cushions for the seat, backrest and armrests and welcomes every moment of your life giving you experiences of pure comfort. Venere is available both as a sofa version and as a small sofa and dormeuse. Small sofa versions feature compact proportions and are the perfect choice to suit smaller environments. The dormeuse version on the other hand recalls the Mater Familias Day Bed’s design, with a more embracing seat, thanks to its back and armrest cushions." },
{ name: "Toby Wing", link: "./images/sofas/12-705x705.jpg", id: 15, model: "Toby Wing PRM 1161", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Nicolas", link: "./images/sofas/undone-705x705.jpg", id: 16, model: "Nicolas PREMIUM 1121", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Mater familias Daybed", link: "./images/sofas/4-705x705.jpg", id: 17, model: "Mater familias CAL 1139", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Mater familias", link: "./images/sofas/3-705x705.jpg", id: 18, model: "Mater familias CAL 1139", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Art nouveau", link: "./images/sofas/1-1-705x705.jpg", id: 19, model: "", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Taylor Lshape", link: "./images/sofas/Taylor-white-705x705.jpg", id: 20, model: "", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Paride L-Shape/Corner", link: "./images/sofas/paride-2-705x705.jpg", id: 21, model: "Paride PRM 1119", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Paride", link: "./images/sofas/paride-4-1-705x705.jpg", id: 22, model: "Paride PRM 1119", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Elisir L-Shape/Corner", link: "./images/sofas/elisir-on-705x705.jpg", id: 23, model: "Elisir CAL 1060/1078", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Fleur", link: "./images/sofas/Fleur-1-705x705.jpg", id: 24, model: "Fleur.1106", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Matheola LShape/Corner", link: "./images/sofas/Matheola-1-705x705.jpg", id: 25, model: "MATHEOLA.1093/1088", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Coco", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg", id: 26, model: "COCO’.1018", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Matheola", link: "./images/sofas/Matheola-10-705x705.jpg", id: 27, model: "MATHEOLA.1093/1088", description: "Matheola is the ancient name of Matera: that is how this model comes into shape, getting inspired by the flair of the land where it was born. Matheola is a low level, contemporary sofa, available both as fixed and sectional versions, thus being extremely versatile. The model boasts a mechanism placed in a panel positioned on the top rear side; the panel can be manually lifted thanks to two metal joints. A 90° rotation of the panel allows the back cushions to be repositioned, thus increasing the seat depth for improved comfort.The Matheola, available with removable fabric covers or in leather, gets additional personality thanks to its versatility: when the panel is lowered, it lines up with the armrests thus enhancing the club sofa style.When the panel is lifted, the back becomes higher, thus reshaping the sofa’s design.The lifted back can be used as a headrest and turns the sofa into a niche where to completely relax.A timeless model, with clean lines further enhanced by the hidden feet and feather padding, which ensures that the sofa will remain unaltered with time, thanks to the material’s capacity to recover its original shape after being pressured." },
{ name: "Fox trot", link: "./images/sofas/Fox-trot-1-705x705.jpg", id: 28, model: "Fox trotFOX TROT.1063", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Romeo Relax LShape/Corner", link: "./images/sofas/paride-2-705x705.jpg", id: 29, model: "Romeo Relax Cal 808_R", description: "Like two proper wings, the backrests and the arms of the Toby Wing can spread to offer unique moments of pure relax. The back sections slid backwards increase the seat depth of 42 cm whereas the sideways moving arms once extended, increase the seat width of 25 cm. The Toby wing becomes a unique place, an island where to rest, dream, taking a break in full comfort." },
{ name: "Elisir", link: "./images/sofas/Elisir-web-705x705.jpg", id: 30, model: "Elisir CAL 1060/1078", description: "The Elisir stands out for its elegant, soft shapes, in stark contrast to the pin shaped legs, Thanks to a mechanism hidden within the head/back rests, the back element can be adjusted to the desired height and comfort." }
]

//show-details
let showButtons = document.querySelectorAll(".show-details");

if (showButtons.length > 0) {
    showButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let chair = chairss[index];
            if (chair) {
                let overlay = document.createElement("div");
                overlay.style.cssText = `
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        `;

                let popup = document.createElement("div");
                popup.style.cssText = `
          background: #fff;
          color: #222;
          padding: 25px;
          border-radius: 14px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          font-family: sans-serif;
          position: relative;
          overflow-y: auto;
          max-height: 85vh;
        `;

                popup.innerHTML = `
          <img src="${chair.link}" alt="${chair.name}" style="width:100%; border-radius:10px; margin-bottom:15px;">
          <h2 style="margin-bottom:10px;">${chair.name}</h2>
          <p><strong>ID:</strong> ${chair.id}</p>
          <p><strong>Model:</strong> ${chair.model || "N/A"}</p>
          <p style="margin-top:10px;">${chair.description}</p>
          <button id="closePopup" style="
            margin-top: 20px;
            background: black;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          ">Close</button>
        `;

                overlay.appendChild(popup);
                document.body.appendChild(overlay);
                document.getElementById("closePopup").addEventListener("click", () => {
                    overlay.remove();
                });

                overlay.addEventListener("click", (e) => {
                    if (e.target === overlay) overlay.remove();
                });
            }
        });
    });
}