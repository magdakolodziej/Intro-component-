/*var n = $("input").length;
var inputValue = $("input").val();
var emailAdress = document.getElementById("email");
 
 $("button").click(checkInput);

 function checkInput(){
  if(inputValue === ""){
    var newText = $("input").attr("placeholder")+ " cannot be empty";
    $("input").attr("placeholder", newText);
  }
  if(!checkEmail(emailAdress)){{
    var newText = $("email").attr("placeholder")+ " is invalid";
    $("email").attr("placeholder", newText);
  }};
 };

function checkEmail(emailAdress){
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(emailAdress).toLowerCase());
}; */


const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const emailAddress = document.getElementById("email")
const password = document.getElementById("password")



let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g



function checkFirstName() {
    if (!firstName.value) {
      firstName.setAttribute("placeholder", "First Name cannot be empty")
      firstName.classList.add("error");
    }
}

function checkLastName() {
    if (!lastName.value) {
        lastName.setAttribute("placeholder", "Last Name cannot be empty")
    }
}

function checkEmailAddress() {
    if (!emailAddress.value) {
        emailAddress.setAttribute("placeholder", "Email cannot be empty")
    }
    else if(!emailFormat.test(emailAddress.value)) {
            emailAddress.setAttribute("placeholder", "Email is not correct")
    }
 }


function checkPassword() {
    if (!password.value) {
        password.setAttribute("placeholder", "Password cannot be empty")
    }
}

document.querySelector("button").addEventListener("click", checkAll);

function checkAll(){
    checkFirstName();
    checkLastName();
    checkEmailAddress();
    checkPassword();
}