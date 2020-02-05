function connecter() {
    let tabUsersClient = JSON.parse(localStorage.getItem('tabUsersClient'))
let verif = false;
  var x = document.getElementById('email').value;
  var y = document.getElementById('password').value;
  for (let i = 0; i < tabUsersClient.length; i++) {
    if (tabUsersClient[i].Email == x && tabUsersClient[i].password== y) {
        localStorage.setItem('indexConnecteClient', i);
        verif = true;
        window.location.href="./store.html"
    }
  }
   if(verif == true) {
    document.getElementById('connecter').innerHTML = '<p>connection avec succès</p>'
   }  else {
      alert("vérifier vos parametres");    
    }
  }
  