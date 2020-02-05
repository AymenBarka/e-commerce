//function register() {

// let object = {
// Name: document.getElementById('name').value,
// Birthdate: document.getElementById('birthday').value,
// Gender: document.getElementById('gender').value,
//Email: document.getElementById('email').value,
//password: document.getElementById('password').value,


//}
//if(verifMail() == false) {
//let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
//tabUsers.push(object);
//localStorage.setItem('tabUsers', JSON.stringify(tabUsers))
//window.location.href="./login.html"
//} else {
// alert('verifiez vos parametres')
//}

//}
//function verifMail() {
// let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
// let verif = false;
// var x = document.getElementById('email').value;
//for (let i = 0; i < tabUsers.length; i++) {
//  if (tabUsers[i].Email == x) {
// verif = true
//document.getElementById('verifMail').innerHTML = '<p>emailexist</p>'
// } else {
// verif = false;
// document.getElementById('verifMail').innerHTML = '<p></p>'
// }
//}
// return verif;
//}

function register() {
    let object = {
        Name: document.getElementById('name').value,
        Birthdate: document.getElementById('birthday').value,
        Gender: document.getElementById('gender').value,
        Email: document.getElementById('email').value,
        password: document.getElementById('password').value,

    }
    if (verifMail() == false) {
        let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
        tabUsers.push(object);
        localStorage.setItem('tabUsers', JSON.stringify(tabUsers))

        window.location.href = "./loginFournisseur.html"
    } else {

        alert('verifiez vos parametres')
    }
}
function verifMail() {
    let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
    let verif = false;
    var x = document.getElementById('email').value;
    for (let i = 0; i < tabUsers.length; i++) {
        if (tabUsers[i].Email == x) {
            verif = true
            document.getElementById('verifMail').innerHTML = '<p>emailexist</p>'
        } else {
            verif = false;
            document.getElementById('verifMail').innerHTML = '<p></p>'
        }
    }
    return verif;
}