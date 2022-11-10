document.getElementById("submit").addEventListener("click", validateForm);

function validateForm() {
  let x = document.getElementById("signUp");
    if (x == "") {
      alert("Missing fields must be filled out");
        return false;
}

else {
      alert('Thank you for signing up!');
      window.location.href = "orderComplete.html";
}

}