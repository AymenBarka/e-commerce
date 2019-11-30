function deconnection(){
    localStorage.setItem('indexConnecte', null);

    window.location.href = "./loginFournisseur.html"

}

function affichageProduit(){
    var userConnecter = JSON.parse(localStorage.getItem('Produit'))
    var index = localStorage.getItem('indexProduitModif')
    document.getElementById('catégorie').value = userConnecter[index].Catégorie;
    document.getElementById('marque').value = userConnecter[index].Marque;
    document.getElementById('produit').value = userConnecter[index].Nom;
    document.getElementById('price').value = userConnecter[index].Prix;
    document.getElementById('description').value = userConnecter[index].Description;
    document.getElementById('number').value = userConnecter[index].Quantité;

}
function modif(){
    var userConnecter = JSON.parse(localStorage.getItem('Produit'))
    var index = localStorage.getItem('indexProduitModif')
    userConnecter[index].Catégorie = document.getElementById('catégorie').value;
    userConnecter[index].Marque = document.getElementById('marque').value;
    userConnecter[index].Nom =document.getElementById('produit').value;
    userConnecter[index].Prix = document.getElementById('price').value;
    userConnecter[index].Description = document.getElementById('description').value;
    userConnecter[index].Quantité = document.getElementById('number').value;

    localStorage.setItem('Produit', JSON.stringify(userConnecter));
}