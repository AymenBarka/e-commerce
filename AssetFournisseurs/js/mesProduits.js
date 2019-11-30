function historique() {
  let userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
  var Produit = JSON.parse(localStorage.getItem('Produit'))
  var index = localStorage.getItem('indexConnecte')
  let New = {

    User: userConnecter[index].Email,
  }
  var html = ""
  const ProduitsFiltre = Produit.filter(produit => produit.User == userConnecter[index].Email );
  console.log(ProduitsFiltre)
  for (let i = 0; i < ProduitsFiltre.length; i++) {
    // if (Produit[i].User == userConnecter[index].Email) {
      html = html + "<tr><td>" + ProduitsFiltre[i].Catégorie + "</td><td>" + ProduitsFiltre[i].Marque + "</td><td>" + ProduitsFiltre[i].Nom + "</td><td>" + ProduitsFiltre[i].Prix + "</td><td>" + ProduitsFiltre[i].Quantité + "</td><td class='text-right'>" + ProduitsFiltre[i].Description + "</td><td><button onclick='modifProduit("+ i + ")'>Modifier</button></td><td><button onclick='supprimer(" + i + ")'>Supprimer</button></td></tr>"
      document.getElementById('produits').innerHTML = html;
    // }
  }
}
function supprimer(index) {
var Produit = JSON.parse(localStorage.getItem('Produit'))
Produit.splice(index, 1);
localStorage.setItem('Produit', JSON.stringify(Produit));
historique();
}
function modifProduit(index) {
  localStorage.setItem('indexProduitModif', index);
  window.location.href = "./modifproduit.html"
}
function deconnection() {
  localStorage.setItem('indexConnecte', null);

  window.location.href = "./loginFournisseur.html"

}

