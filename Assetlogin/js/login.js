
function connecter() {
    let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
let verif = false;
  var x = document.getElementById('email').value;
  var y = document.getElementById('password').value;
  for (let i = 0; i < tabUsers.length; i++) {
    if (tabUsers[i].Email == x && tabUsers[i].password== y) {
        localStorage.setItem('indexConnecte', i);
        verif = true;
        window.location.href="./dashboard.html"
    }
  }
   if(verif == true) {
    document.getElementById('connecter').innerHTML = '<p>connection avec succès</p>'
   }  else {
      alert("vérifier vos parametres");    
    }
  }
  