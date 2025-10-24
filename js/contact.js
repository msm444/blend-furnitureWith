//offer
setTimeout(() => {

    //overlay
    let overlay = document.createElement("div")
    overlay.className = "parent"
    overlay.style.cssText = `position:fixed;top:0;left:0;
    height:100%;width:100%;background-color: rgba(0, 0, 0, 0.5);z-index:20000;display:flex;align-items:center;justify-content:center`

    //offer box
    let offerBox = document.createElement("div")
    offerBox.className = `offer`
    offerBox.style.cssText = `height: 500px;
    width: 350px;
    background: #f2f2f2;
    position: relative;`

    //content offer box
    let headBox = document.createElement("h3")
    headBox.textContent = `STAY IN THE KNOW!`
    headBox.style.cssText = `text-align: center;
    width: 140px;
    margin: 20px auto;
    font-weight: bold;
    font-size: 1.4rem;
    font-style: italic;`


    //offer info
    let offerInfo = document.createElement("div")
    offerInfo.style.cssText = `width: 200px;padding:10px;margin:0 auto`
    //content
    let headInfo = document.createElement("p")
    headInfo.textContent = `Join our mailing list and receive.`
    headInfo.style.cssText = `margin: 0;
    font-size: 12px;
    text-align: center;`


    // offer value
    let offerValue = document.createElement("span")
    offerValue.textContent = `10% off`
    offerValue.style.cssText = `font-size: 29px;
    text-transform: uppercase;
    font-weight: 900;
    display: block;
    text-align: center;
    margin: 15px auto;`

    let offerMessage = document.createElement("p")
    offerMessage.textContent = `YOUR FIRST FULL PRICED PURCHASE`
    offerMessage.style.cssText = `    text-align: center;
    margin: 0px auto;
    font-size: .73rem;
    font-weight: bolder;`
    let span = document.createElement("span")
    span.textContent = `on selected non-sale products!`
    span.style.cssText = `    display: block;
    font-size: .65rem;
    font-family: sans-serif;
    font-weight: 500;
    margin-top: 8px;`
    offerMessage.append(span)

    // form
    let form = document.createElement("form")
    form.style.cssText = `margin: 15px auto;
    display: flex;
    flex-direction: column;
    width: 75%;
    gap: 5px;`
    let inputMail = document.createElement("input")
    inputMail.type = "E-mail"
    inputMail.placeholder = `youremail@email.com`
    inputMail.style.cssText = `padding: 7px 30px;
    background: whitesmoke;
    outline: none;
    border: 1px solid rgb(226 232 240);
    border-radius: 5px;
    font-size: 0.95rem;`

    //email icon
    let emailIcon = document.createElement("i");
    emailIcon.className = "fa-solid fa-envelope"
    inputMail.append(emailIcon)

    // btn submit
    let btnSubmit = document.createElement("input")
    btnSubmit.type = "submit"
    btnSubmit.value = `get my coupon`
    btnSubmit.style.cssText = `    color: white;
    background: black;
    padding: 7px;
    border-radius: 8px;
    text-transform: capitalize;
    font-size: .8rem;
    font-weight: bold;`

    // btn delete  offer
    let btnDelete = document.createElement("button")
    btnDelete.textContent = "X"
    btnDelete.style.cssText = `position: absolute;
    top: -25px;
    right: 0px;
    border: none;
    padding: 3px 6px;
    font-size: .8rem;cursor:pointer`

    // delet offer
    btnDelete.addEventListener("click", () => {
        overlay.remove()
    })


    // check mail and show msg
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        let emailValue = inputMail.value.trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            alert("Please enter a valid email!");
            inputMail.focus();
            return;
        } else {
            let Msg = document.createElement("div");
            Msg.textContent = " Coupon sent successfully!";
            Msg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        z-index: 30000;
        text-align: center;
        opacity: 0;
        transition: opacity .3s ease;
    `;

            document.body.append(Msg);
            setTimeout(() => Msg.style.opacity = "1", 50);
            setTimeout(() => {
                Msg.style.opacity = "0";
                setTimeout(() => Msg.remove(), 300);
                inputMail.value = ""
            }, 1000);

            setTimeout(() => { overlay.remove() }, 2000)
        }

    });


    form.append(inputMail, btnSubmit)
    offerInfo.append(headInfo, offerValue, offerMessage)
    offerBox.append(headBox, offerInfo, form, btnDelete)
    overlay.append(offerBox)
    document.body.append(overlay)

}, 600)


// create element
let main = document.querySelector("main")
let secContact = document.createElement("section")
secContact.id = "contact"
///map 
let divMap = document.createElement("div")
divMap.className = `map`
divMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.104662286966!2d32.748677124266!3d26.19327340565498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144eb73bb3ba3f03%3A0x9e98724b6d820546!2z2YHYsdi5INin2YTZhdi52YfYryDYp9mE2YLZiNmF2Yog2YTZhNin2KrYtdin2YTYp9iqIE5USSBRRU5B!5e0!3m2!1sen!2seg!4v1761209768035!5m2!1sen!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

// add container to section
let container = document.createElement("div")
container.classList = "container"
container.style.cssText =
    `padding-top: 100px;
    padding-bottom: 100px;
        display: flex;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    gap: 50px;`
// create form
let form = document.createElement("form");
form.style.flex = "1"
//head
const title = document.createElement("h2");
title.textContent = "Get In Touch";
title.style.marginBottom = "20px";
form.appendChild(title);


function LabelStyle() {
    return `
    display:block;
    margin-bottom:6px;
    font-size:14px;
    color:#333;
` }

function inputStyle() {
    return `
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
  background:#fcfcfc;
`
}
function inputEvent(input) {
    input.addEventListener("focus", () => {
        input.style.borderColor = "#a02050";
        input.style.transform = "scale(1.02)";
    });
    input.addEventListener("blur", () => {
        input.style.borderColor = "#ccc";
        input.style.transform = "scale(1)";
    });
}
// ***********name input************
let nameContainer = document.createElement("div");
nameContainer.style.marginBottom = "15px";

let nameLabel = document.createElement("label");
nameLabel.textContent = "Name *";
nameLabel.style.cssText = LabelStyle()

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.style.cssText = inputStyle()
// event 
inputEvent(nameInput)
nameContainer.append(nameLabel, nameInput);

//******************Email input*******************
let mailContainer = document.createElement("div");
mailContainer.style.marginBottom = "15px";

let emailLabel = document.createElement("label");
emailLabel.textContent = "E-Mail *";
emailLabel.style.cssText = LabelStyle();

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.style.cssText = inputStyle();
// event
inputEvent(emailInput)
mailContainer.append(emailLabel, emailInput)

//********* Subject ********/
let subContainer = document.createElement("div");
subContainer.style.marginBottom = "15px";

let subLabel = document.createElement("label");
subLabel.textContent = "Subject *";
subLabel.style.cssText = LabelStyle();

let subInput = document.createElement("input");
subInput.type = "text";
subInput.style.cssText = inputStyle();
//event
inputEvent(subInput)
subContainer.append(subLabel, subInput)


//********** Message *******/

let MsgContainer = document.createElement("div");
MsgContainer.style.marginBottom = "15px";

let messageLabel = document.createElement("label");
messageLabel.textContent = "Message *";
messageLabel.style.cssText = LabelStyle()

let messageArea = document.createElement("textarea");
messageArea.style.cssText = inputStyle()
messageArea.style.minHeight = `100px`
// event
inputEvent(messageArea)
MsgContainer.append(messageLabel, messageArea)

///*******************Submit ****************/
let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.style.cssText = `
  background-color: #a02050;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
  margin-top: 10px;
`;


submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.opacity = "0.8";
});
submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.opacity = "1";
});

let msgCheck = document.createElement("div")
msgCheck.className = `msgCheck`
msgCheck.style.cssText = `position:fixed;width:100%;
height:100%;
top:0;
left:0;
z-index:12222;
background: #8c8c8c8f;
`
let alert = document.createElement("div")
alert.style.cssText = `position: absolute;
    top: 50%;
    left: 50%;
    transition: 1s;
    transform: translate(-50%,-50%);background:white;
    padding:100px 25px;
    border-radius:15px;width: 350px;
    text-align: center;`
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        subInput.value.trim() === "" ||
        messageArea.value.trim() === ""
    ) {
        alert.textContent = `Please fill in all fields before submitting  ⚠️`
    } else if (!emailRegex.test(emailInput.value.trim())) {
        alert.textContent = `Please enter a valid email address 📧`;
    }

    else {
        alert.textContent = `Your message has been sent successfully ✅`
    }
    msgCheck.append(alert)
    document.body.append(msgCheck)
    setTimeout(() => {
        msgCheck.remove()
    }, 2000)
});

form.append(nameContainer, mailContainer, subContainer, MsgContainer, submitBtn)
container.append(form);

///**************contact-info*************** */
let contact = document.createElement("div");
contact.className = "contact"
contact.style.cssText = `
  font-family: Arial, sans-serif;
  color: #222;
  padding: 20px;flex:1;align-items:center
`;

// first address 
let box1 = document.createElement("div");
box1.style.cssText = `
  border-left: 4px solid #ccc;
  padding-left: 10px;
  margin-bottom: 25px;
`;

let title1 = document.createElement("h3");
title1.textContent = "Arkan Plaza - Sheikh Zayed Showroom";
title1.style.cssText = "font-size: 18px; margin-bottom: 8px;";

let addr1 = document.createElement("p");
addr1.innerHTML = "<strong>Address:</strong><br>Arkan Plaza<br>Sheikh Zayed, 6th of October city";

let email1 = document.createElement("p");
email1.innerHTML = "<strong>E-mail:</strong> info@blendfurniture.com";

let tel1 = document.createElement("p");
tel1.innerHTML = "<strong>Tel:</strong> +2 02 3850 9661";

let mob1 = document.createElement("p");
mob1.innerHTML = "<strong>Mobile:</strong> +2 012 00044481";

let hours1 = document.createElement("p");
hours1.innerHTML = "<strong>Opening Hours:</strong><br>10:00 AM - 10:00 PM";
box1.append(title1, addr1, email1, tel1, mob1, hours1);

//sec adress
let box2 = document.createElement("div");
box2.style.cssText = `
  border-left: 4px solid #ccc;
  padding-left: 10px;
  margin-bottom: 25px;
`;

let title2 = document.createElement("h3");
title2.textContent = "Downtown Katameya Mall - New Cairo Showroom";
title2.style.cssText = "font-size: 18px; margin-bottom: 8px;";

let addr2 = document.createElement("p");
addr2.innerHTML = "<strong>Address:</strong><br>Downtown Katameya Mall<br>Area A-City Center, 5th District, Road 90, Cairo";

let email2 = document.createElement("p");
email2.innerHTML = "<strong>E-mail:</strong> info@blendfurniture.com";

let tel2 = document.createElement("p");
tel2.innerHTML = "<strong>Tel:</strong> +2 0223146150";

let mob2 = document.createElement("p");
mob2.innerHTML = "<strong>Mobile:</strong> +2 01205088867";

let hours2 = document.createElement("p");
hours2.innerHTML = "<strong>Opening Hours:</strong><br>10:00 AM - 10:00 PM";

box2.append(title2, addr2, email2, tel2, mob2, hours2);

// append all in contact
contact.append(box1, box2);
container.append(contact);
secContact.append(divMap, container)
main.append(secContact)


