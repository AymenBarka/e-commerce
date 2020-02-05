function getImage(event) {
    const produit = {
        img: '',
    }
    console.log(event.files[0]);
    var reader = new FileReader();
    reader.onload = function (e) {
        console.log(e.target.result);
        produit.img = e.target.result;
    }
    reader.readAsDataURL(event.files[0]);
}
function enregistrer() {
    var userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
    var index = localStorage.getItem('indexConnecte')
    let Produit = JSON.parse(localStorage.getItem('Produit'));
    if (!Produit) {
        Produit = [];
    }


    let New = {
        Catégorie: document.getElementById('catégorie').value,
        Marque: document.getElementById('marque').value,
        Nom: document.getElementById('produit').value,
        Description: document.getElementById('description').value,
        Quantité: document.getElementById('number').value,
        Prix: document.getElementById('price').value,
        img: '',
        User: userConnecter[index].Email,

    }
    console.log(document.getElementById('img').files[0]);
    var reader = new FileReader();
    reader.onload = function (e) {
        New.img = e.target.result;
        Produit.push(New);
        localStorage.setItem('Produit', JSON.stringify(Produit))
        window.location.href = "./mesProduits.html"
    }
    reader.readAsDataURL(document.getElementById('img').files[0]);


}
function deconnection() {
    localStorage.setItem('indexConnecte', null);

    window.location.href = "./loginFournisseur.html"

}