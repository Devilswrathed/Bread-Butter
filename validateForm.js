// document.getElementById('signUp').addEventListener('submit', validateForm());
// document.getElementById('button').addEventListener('click', redirect());

const signUp = document.querySelector("#signUp")
const button = document.querySelector("#button")

signUp.addEventListener('submit', validateForm())
button.addEventListener('submit', redirect())



function validateForm() {
  let x = document.forms["signUp"]["fname","lname","email","pword"].value;
    if (x == "") {
      alert("Missing fields must be filled out");
    valid = false;
  }
}

function redirect() {
  alert('Thank you for signing up! You will now be redirected.')
  window.location.href = ('orderComplete.html')
}