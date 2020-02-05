function registerClient() {
    let object = {
        Name: document.getElementById('name').value,
        Birthdate: document.getElementById('birthday').value,
        Gender: document.getElementById('gender').value,
        Email: document.getElementById('email').value,
        password: document.getElementById('password').value,

    }
    if (verifMail() == false) {
        let tabUsersClient = JSON.parse(localStorage.getItem('tabUsersClient'))
        tabUsersClient.push(object);
        localStorage.setItem('tabUsersClient', JSON.stringify(tabUsersClient))

        window.location.href = "./loginClient.html"
    } else {

        alert('verifiez vos parametres')
    }
}
function verifMail() {
    let tabUsersClient = JSON.parse(localStorage.getItem('tabUsersClient'))
    let verif = false;
    var x = document.getElementById('email').value;
    for (let i = 0; i < tabUsersClient.length; i++) {
        if (tabUsersClient[i].Email == x) {
            verif = true
            document.getElementById('verifMail').innerHTML = '<p>emailexist</p>'
        } else {
            verif = false;
            document.getElementById('verifMail').innerHTML = '<p></p>'
        }
    }
    return verif;
}