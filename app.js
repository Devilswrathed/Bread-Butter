function redirect() {
        alert('Added to cart!');
        window.location.href = "checkout.html";
}

// Path: checkout.html




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

// function validateForm() {
//     let x = document.forms["signUp"]["fname","lname","email","pword"].value;
//       if (x == "") {
//         alert("Missing fields must be filled out");
//       return false;
//     }

//     else {
//       alert('Thank you for signing up!');
//       window.location.href = "orderComplete.html";
//     }
//   }


  function submitRedirect() {
    alert('Thank you for submitting your review! You will now be redirected.');
    window.location.href = "index.html";
  }