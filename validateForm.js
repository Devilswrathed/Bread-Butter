// document.getElementById('signUp').addEventListener('submit', validateForm());


// function validateForm() {
//   let x = document.forms["signUp"]["fname","lname","email","pword"].value;
//     if (x == "") {
//       alert("Missing fields must be filled out");
//     valid = false;
//   }
// }





const form = document.getElementById('signUp');
form.addEventListener("click", validateForm());

function checkoutRedirect() {
  alert('Thank you for signing up!');
  window.location.href = "orderComplete.html";
}

function validateForm() {
  let x = document.forms["signUp"]["fname","lname","email","pword"].value;
  if (x == "") {
    alert("Missing fields must be filled out!");
  }
  else checkoutRedirect()
}