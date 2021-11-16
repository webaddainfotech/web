$(document).ready(function() {
  $('.smbutn').click(function() {
    var ynam = document.getElementById('yname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    if (ynam == "") {
      swal("Please Enter Your Name!", "Forget to enter your name!", "warning");
    } else if (ynam.length <= 3) {
      swal("Not a valid Name!", "Are you sure is this correct name?!", "error");
    } else if (!isNaN(ynam)) {
      swal("Name Never Contain Digit!", "You have entered the wrong Name!", "warning");
    } else if (email == "") {
      swal("Please Enter Your Email!", "Forget to enter your email!", "warning");
    } else if (mobile == "") {
      swal("Please Enter Your Mobile No.!", "Forget to enter your email!", "warning");
    } else {
      swal("Thanks for your Submission!", "Our team connect you shortly!", "success");
    }
  });
});