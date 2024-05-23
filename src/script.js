function getValues(){
  var firstname = document.getElementById('Firstname');
  var lastname = document.getElementById('Lastname');
  var email = document.getElementById('Email');
  changeCase(firstname,lastname,email)
}

function changeCase(firstname,lastname,email) {
    firstname.value= firstname.value.toUpperCase();
    lastname.value= lastname.value.toUpperCase();
    email.value = email.value.toUpperCase();
}


