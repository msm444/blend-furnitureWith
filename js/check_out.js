// form validation
const form = document.getElementById("userInfo");
let fname = document.getElementById("fname");
var errorfname = document.getElementById("fname_err");
let lname = document.getElementById("lname");
var errorlname = document.getElementById("lname_err");
let email = document.getElementById("email");
var erroremail = document.getElementById("email_err")
let phone = document.getElementById("phone");
var errorphone = document.getElementById("phone_err")
let address = document.getElementById("address");
var erroraddress = document.getElementById("address_err")
let payMethod = document.getElementById("payment");

// to add +20 before phone number  
phone.addEventListener("keydown", (e) => {
  if (phone.selectionStart <= 4 && (e.key === "Backspace" || e.key === "ArrowLeft")) {
    e.preventDefault();
  }
});

phone.addEventListener("input", () => {
  if (!phone.value.startsWith("+20 ")) {
    phone.value = "+20 "; 
  }
});
/////////////////////////////////

//  submit of the form
form.addEventListener("submit", (err) => {
  err.preventDefault();

 const ok=validateInputs();
 if (ok){
    form.submit();
    alert("your order sent successfully & we will contact with you ")
 }
});
/////////////////////////

// to add error message in the required element //
const setError=(ele,msg)=>{
  ele.innerHTML="";
  let m=document.createElement("p");
  m.innerHTML=msg;
  m.classList.add("error");
  ele.appendChild(m);
}
///////////////////////////////////////////

// to check if valid inputs  //
const validateInputs = () => {
let vfname = document.getElementById("fname").value.trim();
let vlname = document.getElementById("lname").value.trim();
const usrname = vfname + " " + vlname;
let vemail = document.getElementById("email").value.trim();
let vphone = document.getElementById("phone").value.trim();
let vaddress = document.getElementById("address").value.trim();
let vpayMethod = document.getElementById("payment").value;
 
let correct =true;
var nameReg=/^[A-Za-z]+$/;
var emailReg=/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
var phoneReg=/^\+20\s[0-9]{10}$/;

if(vfname.length===0){
    setError(errorfname,"*Your first name is required");
     correct =false;
} 
else if(!nameReg.test(vfname)){
    setError(errorfname,"*invalid name (should contain only English characters)")
     correct =false;
}
else if(vfname.length>15){
  setError(errorfname,"*invalid name (max 15 characters)");
  correct =false;
}
else{
    errorfname.innerHTML="";
}

if(vlname.length===0){
    errorlname.innerHTML="";
}
else if(!nameReg.test(vlname)){
    setError(errorlname,"*invalid name (should contain only English characters)")
     correct =false;
}
else if(vlname.length>15){
  setError(errorlname,"*invalid name (max 15 characters)");
  correct =false;
}
else{
    errorlname.innerHTML="";
}

if(vemail.length===0){
    setError(erroremail,"*Your email is required");
     correct =false;
} 
else if(!emailReg.test(vemail)){
    setError(erroremail,"*invalid email (user@domain.com )")
     correct =false;
}
else{
    erroremail.innerHTML="";
}

if(phone.value==="+20 "){
    setError(errorphone,"*Your phone number is required");
     correct =false;
} 
else if(!phoneReg.test(vphone)){
    setError(errorphone,"*invalid phone number (should contain 10 numbers)")
     correct =false;
}
else{
    errorphone.innerHTML="";
}

if(vaddress.length===0){
    setError(erroraddress,"*your address is required")
      correct =false;
}
else{
    erroraddress.innerHTML="";
}

return correct;
};
/////////////////////////////////////////////////////