
document.getElementById('signUp').addEventListener('submit', validateForm());
document.getElementById('button').addEventListener('click', redirect());

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