document.getElementById('signUp').addEventListener('submit', validateForm());

function validateForm() {
    let x = document.forms["signUp"]["fname","lname","email","pword"].value;
      if (x == "") {
        document.signUp.x.style.background='Yellow';
        alert("Missing fields must be filled out");
      return false;
    }
    else {
      alert('Thank you for signing up!');
      window.location.href = "orderComplete.html";
    }
  }



