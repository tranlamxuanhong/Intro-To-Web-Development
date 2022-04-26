let form = document.getElementById("contactForm");
let phone = form.phoneNo;


function validation(event) {
  if((isNaN(phone.value)) || (phone.value.length > 10)){

    event.preventDefault();
  }
}

form.addEventListener("submit", validation);
