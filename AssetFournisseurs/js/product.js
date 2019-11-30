function enregistrer(){
    var userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
    var index = localStorage.getItem('indexConnecte')
    let Produit = JSON.parse(localStorage.getItem('Produit'));
    if(!Produit) {
        Produit = [];
    }
    let New = {
        Catégorie: document.getElementById('catégorie').value,
        Marque: document.getElementById('marque').value,
        Nom : document.getElementById('produit').value,
        Description: document.getElementById('description').value,
        Quantité: document.getElementById('number').value,
        Prix: document.getElementById('price').value,
        User: userConnecter[index].Email,
    }
    Produit.push(New);
    localStorage.setItem('Produit', JSON.stringify(Produit))
}
function deconnection(){
    localStorage.setItem('indexConnecte', null);

    window.location.href = "./loginFournisseur.html"

}