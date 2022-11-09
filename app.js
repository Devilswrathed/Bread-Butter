function redirect() {
        alert('Added to cart!');
        window.location.href = "checkout.html";
}

// Path: checkout.html


function validateForm() {
    let x = document.forms["signUp"]["fname","lname","email","pword"].value;
    if (x == "") {
      alert("Missing fields must be filled out");
      return false;
    }
  }