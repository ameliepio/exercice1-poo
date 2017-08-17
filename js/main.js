// exercice 1
var amel = new Person('amelie','Pioger',1980,'france','visa','date','year',[]);
// var year=(amel.date-amel.age);

function Person(prenom, nom, age, pays, paiement,date,){
  this.prenom = prenom;
  this.nom = nom;
  this.age = age;
  this.pays = pays;
  this.paiement = ["visa"] ;
  this.date=2017;
  this.year=(this.date-this.age);
};
alert(amel.prenom+' '+amel.nom+ ' '+amel.year+''+'ans')

// alert(amel.year)
// alert(amel.date-amel.age+" ans ")

/*Comparaison*/
var comp=new Comparaison(['FRANCE','BELGIQUE','ALLEMAGNE',],18,'MASTERCARD');
function Comparaison(pays,year,paiement){
this.pays=pays,
this.year=year,
this.paiement = paiement,
this.compare=function(){

};
};

// /*Age*/
//
if (comp.year<amel.year){
  alert('acces autorise');
}else {
  alert ('acces refuse');
}

/*Pays*/

var cpt=0
for (let i = 0; i < comp.pays.length; i++) {
  if (amel.pays===comp.pays[i]) {
cpt++;
break;}
}
if(cpt){
    alert('pays autorise');
}else {

  alert('pays refuse');
};

/*Paiement*/

var cptp=0
for (let j = 0; j < comp.paiement.length; j++) {
  if (amel.paiement===comp.paiement[j]) {
cptp++;
break;}
}
if(cptp){
    alert('paiement autorise');
}else {

  alert('paiement refuse');
};
