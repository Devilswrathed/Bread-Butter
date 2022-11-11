function orderRedirect() {
    alert('Thank you for signing up! You will now be redirected.');
    window.location.href = "orderComplete.html";
  }

function validateForm() {
    let x = document.forms["signUp"]["fname","lname","email","pword"].value;
      if (x == "") {
        alert("Missing fields must be filled out");
      return false;
    }
    else {
      // alert('Thank you for signing up!');
      // window.location.href = "orderComplete.html";
      orderRedirect()
    }
  }