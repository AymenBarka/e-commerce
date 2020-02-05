function afficherOrder(){
    var Panier1 = JSON.parse(localStorage.getItem('prodPanier1'));
    let total = 0;
    let i = localStorage.getItem('indexProduitView');
    html = ""
    for (let i = 0; i < Panier1.length; i++){
        html= html + "<div class='order-col'><div>" + Panier1[i].quantité + " " +"X"  +" " + Panier1[i].produit.Nom + "</div><div>" + Panier1[i].totalproduit + "DT" + "</div></div>"
        total = total + (Panier1[i].quantité * Panier1[i].totalproduit)  
    }
    document.getElementById('order').innerHTML = html;
    document.getElementById('subtotal').innerHTML = total +' DT';


}
function order(){
    localStorage.setItem('prodPanier1', JSON.stringify([]));
    window.location.href="./index.html"

}