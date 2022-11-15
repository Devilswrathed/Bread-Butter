// document.getElementById('signUp').addEventListener('submit', validateForm());
// document.getElementById('button').addEventListener('submit', redirect());

// function validateForm() {
//   let x = document.forms["signUp"]["fname","lname","email","pword"].value;
//     if (x == "") {
//       alert("Missing fields must be filled out");
//     valid = false;
//   }
// }

// function redirect() {
//   alert('Thank you for signing up! You will now be redirected.')
//   window.location.href = ('orderComplete.html')
// }

// const signUp = document.querySelector("#signUp")
// const button = document.querySelector("#button")

// signUp.addEventListener('submit', validateForm())
// button.addEventListener('submit', redirect())

// document.getElementById("signUp").addEventListener("submit", validateForm())


// function validateForm() {
//   let x = document.forms["signUp"]["fname","lname","email","pword"].value;
//     if (x == "") {
//       alert("Missing fields must be filled out");
//     valid = false;
//   }
// } 

var form = document.getElementById('form');


form.addEventListener('submit', function(event) {
  event.preventDefault() // prevents for from auto submitting

  var firstname = document.getElementById('fname').value

  var lastname = document.getElementById('lname').value

  var email = document.getElementById('email').value

  var password = document.getElementById('pword').value


  if (value == true) {
    alert("Thank you for signing up!")
    window.location.href = ("orderComplete.html")
  }


})