// ******logIn popup*****************
const popup = document.createElement("form");
popup.className = "popup"
popup.style.position = "fixed";
popup.style.display = "none";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.flexDirection = "column";
popup.style.borderRadius = "20px"
popup.style.transform = "translate(-50%, -50%)";
popup.style.zIndex = "1000";
popup.style.backgroundColor = "#fff";
popup.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.4)'

const popupTop = document.createElement("div");
popupTop.className = "popup-top";
popupTop.style.display = "flex";
popupTop.style.justifyContent = "space-between";
popupTop.style.marginBottom = "30px";

const logo = document.createElement("img");
logo.src = "./images/Home/logo.png";
logo.style.width = "200px";
logo.style.width = "100px";
logo.style.display = "flex";
logo.style.justifyContent = "center";

const cls = document.createElement("h3");
cls.className = "cls";
cls.innerHTML = '<i class="fa-solid fa-xmark"></i>';
cls.style.width = "50px";
cls.style.height = "50px";
cls.style.cursor = "pointer";
cls.style.display = 'flex';
cls.style.justifyContent = "center";
cls.style.alignItems = "center";
cls.style.borderRadius = "50%";

const logIn = document.createElement("h1");
logIn.innerHTML = "Log In";
logIn.style.marginTop = "0px";
logIn.style.marginBottom = "40px";
logIn.style.display = "flex"
logIn.style.justifyContent = "center"

const popupBody = document.createElement("div")
popupBody.style.display = "flex"
popupBody.style.flexDirection = "column"
popupBody.style.justifyContent = "center"
popupBody.style.marginLeft = "30px"
popupBody.style.marginBottom = "30px"

const emailabel = document.createElement("label");
emailabel.textContent = "Email";
emailabel.htmlFor = "user-name";
emailabel.style.marginBottom = "3px";
emailabel.style.fontSize = "13px";
emailabel.style.fontWeight = "550";

const userName = document.createElement("input");
userName.id = "user-name";
userName.placeholder = "Enter user name or email adress";
userName.type = "email";
userName.style.fontSize = "13px"
userName.required = true;
userName.style.width = "90%";
userName.style.outline = "none";
userName.style.padding = "10px";
userName.style.marginBottom = "25px";
userName.style.border = "1px solid #ccc";

const passLabel = document.createElement("label");
passLabel.innerHTML = "Password";
passLabel.htmlFor = "password";
passLabel.style.marginBottom = "3px";
passLabel.style.fontSize = "13px";
passLabel.style.fontWeight = "550";

const password = document.createElement("input");
password.id = "password"
password.type = "password";
password.placeholder = "Password";
password.required = true;
password.style.width = "90%";
password.style.fontSize = "13px"
password.style.outline = "none";
password.style.padding = "10px";
password.style.marginBottom = "25px";
password.style.border = "1px solid #ccc";



const button = document.createElement("button");
button.className = "button"
button.innerHTML = "Login";
button.type = "submit";
button.style.width = "90%";
button.style.padding = "10px";
button.style.backgroundColor = "#AB1F65";
button.style.color = "#fff";
button.style.fontSize = "20px";
button.style.border = "none";
button.style.marginBottom = "20px";

const popupRear = document.createElement("div");
popupRear.style.display = "flex";
popupRear.style.justifyContent = "space-between";
popupRear.style.marginBottom = "30px";

const rememberMe = document.createElement("div")
rememberMe.style.display = "flex"
rememberMe.style.gap = "2px"
rememberMe.style.alignItems = "center"


const checkBox = document.createElement("input");
checkBox.id = "remember-me";
checkBox.type = "checkbox";
checkBox.value = "remember me";


const chkLabel = document.createElement("label");
chkLabel.innerHTML = "Remember Me";
chkLabel.htmlFor = "remember-me";
chkLabel.style.display = "flex";
chkLabel.style.alignItems = "center";
chkLabel.style.fontSize = "14px"

const lostPass = document.createElement("a")
lostPass.href = "#";
lostPass.innerHTML = "Lost Your Password?";
lostPass.style.fontSize = "14px"
lostPass.style.color = "#ab1f65"
lostPass.style.fontWeight = "600"
lostPass.style.opacity = "1"

const overlay = document.createElement("div");
overlay.id = "overlay";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
overlay.style.display = "none";
overlay.style.zIndex = "999";

popup.appendChild(popupTop)
popupTop.appendChild(logo)
popupTop.appendChild(cls)
popup.appendChild(logIn)
popup.appendChild(popupBody)
popupBody.appendChild(emailabel)
popupBody.appendChild(userName)
popupBody.appendChild(passLabel)
popupBody.appendChild(password)
popupBody.appendChild(button)
popup.appendChild(popupRear)
popupRear.appendChild(rememberMe)
rememberMe.appendChild(checkBox)
rememberMe.appendChild(chkLabel)
popupRear.appendChild(lostPass)
document.body.appendChild(overlay)
document.body.appendChild(popup)

cls.addEventListener("mouseover", () => {
    cls.style.backgroundColor = "#ab1f6541"
    cls.style.transition = "all 0.4s"
})
cls.addEventListener("mouseout", () => {
    cls.style.backgroundColor = "#fff"
})

document.querySelector(".log-in").addEventListener("click", function () {
    const popup = document.querySelector(".popup");
    const overlay = document.getElementById("overlay");
    popup.style.display = "flex";
    overlay.style.display = "block";
    popup.style.opacity = "1";
    popup.style.transform = "translate(-50%, -50%) scale(1)";
    document.body.style.overflow = "hidden";
});

cls.addEventListener("click", function () {
    const popup = document.querySelector(".popup");
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    popup.style.display = "none";
    popup.style.transform = "translate(-50%, -50%) scale(1)";
    document.body.style.overflow = "auto";
});



document.querySelector(".button").addEventListener("click", () => {
    const email = document.getElementById("user-name").value;
    localStorage.setItem("username", email);
});


document.querySelector(".button").addEventListener("click", () => {
    const password = document.getElementById("password").value;
    localStorage.setItem("password", password);
});
