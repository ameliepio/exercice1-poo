// exercice 1
var nico = new Person('nico','Ponthieux',1984,'francaise','cb',[]);


function Person(nick, nom, naissance, origine, paiement){
  this.nick = nick;
  this.nom = nom;
  this.naissance = naissance;
  this.origine = origine;
  this.paiement = paiement;
  this.date=2017;
}


alert(nico.nick+' '+nico.nom);


alert(nico.date-nico.naissance+" ans ");




    // la liste tout en majuscules des pays autorisés pour notre utilisateur
    //
    // la liste tout en majuscules des moyens de paiment autorisés sur le site
    //
    // l'âge minimum pour entrer sur le site
