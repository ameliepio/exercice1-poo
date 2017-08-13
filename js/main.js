// // Définition de l'objet Person via un constructeur
//
// function Person(nick, age, sex, parent, work, friends) {
//     this.nick = nick;
//     this.age = age;
//     this.sex = sex;
//     this.parent = parent;
//     this.work = work;
//     this.friends = friends;
//
// }
//
//
// // On crée des variables qui vont contenir une instance de l'objet Person :
//
// var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
//
// var lau = new Person('Laurence', 1p9, 'f', 'soeur', 'Sous-officier', []);
//
//
// alert(seb.nick); // Affiche : « Sébastien »
//
// alert(lau.nick); // Affiche : « Laurence »

function Person(nick, nom, naissance, origine, paiement){
  this.nick = nick;
  this.nom = nom;
  this.naissance = naissance;
  this.origine = origine;
  this.paiement = paiement;
}

var nico = new Person('nico','Ponthieux',1984,'francaise','cb',[]);

alert(nico.nick+' '+nico.nom);
