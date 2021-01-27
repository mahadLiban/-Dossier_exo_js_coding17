// let jourSemaine = prompt("Entrez un jour de la semaine")
// switch(jourSemaine){
//     case 'lundi' :
//     console.log( "On est"+" "+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'mardi' :
//     console.log("On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'mercredi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'jeudi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'vendredi' :
//     console.log("On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'samedi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'dimache' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
// default:
//     console.log("Sorry, je ne comprend pas");
// }


4//


// let meteo = prompt("quel temps fait-il aujourd'hui ?")
// switch (meteo) {
//     case 'vent':
//     console.log("il y a du "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'pluie':
//     console.log("il y a de la "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'neige':
//     console.log("il y a de la "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'soleil':
//     console.log("il y a du "+ meteo + " et des nanas" );
//     break;


//     default:
//         console.log("Tu fais quoi zebi");
//     break;
// }


3//

// let nombre =parseInt(prompt("donne moi un nombre"))
// switch (nombre % 2) {
//     case 0 :
//         alert(nombre+ " est un nombre pair ")
//     break;
    
//     default:
//      alert(nombre + " est impair");
//     break;
// }

4//
// let nombre = parseInt(prompt("donne moi un nombre"));
// let opera = prompt("donne moi une opérateur mathématique");
// let secondNombre= parseInt(prompt("donne moi un second nombre"));

// switch (opera) {
//     case "*":
//     alert(nombre*secondNombre)
//     break;
//     case "+":
//     alert(nombre+secondNombre)
//     break; 
//     case "-":
//     alert(nombre-secondNombre)
//     break; 
//     case "/":
//     alert(nombre/secondNombre)
//     break; 
//     default:
//         alert("a quoi tu joues ? on veut un opé!")
//         break;
// }



// Exo1_boucles-for.md
//Exo1



/* let classe = [ 

     "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
     ]
   for(let i=0; i < classe.length ; i++ )
    console.log("bonjour "+classe [i]);
    */
/* exo2 */
/* let nombre = parseInt(prompt("Donne moi nombre"))

 for(let i=0; i<=nombre; i++ ){
        console.log(i);
 }

 */
/* EXO 2 BOUCLE */
/* exo1 */
 /* let classe = [ 

 "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
    
   ]

    classe.forEach(element => console.log("bonjour "+element)); */
/* exo2 */
/*  let ele = [
         "un", "deux","trois","quatre","cinq"
 ]
 ele.forEach(element => console.log(element)); */





/*  exo3_boucles-for-foreach.md */

/* exo1 */


/* let multiplication = 5
for (let i=0; i<=10; i++) 
{
    console.log(multiplication+" * " + i + " = " + multiplication*i);

  }
 */

/* EXO2 */

/* let multiplication = 5
for (let i=0; i<=10; i+=2) 
{
    console.log(multiplication+" * " + i + " = " + multiplication*i);

  } 
  */


/* EXO 3 */
/*  
 
 for (let i=20; i>=0; i-=2)
 {
     console.log(i);
 
   }
    */

/* EXO 4 */

 /* let classe = [ 

  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
     
  ]
 
let longPrenoms = []

classe.forEach(element => {
  if (element.length>5){
    longPrenoms.push(element)
  }

});
console.log(longPrenoms);  */

/* EXO 5 */

/*  let somme = [
   14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61
  ]

let grossesSommes = []

somme.forEach(element => {
  if (element>60) {
    grossesSommes.push(element)
    
  }
  
}); 
console.table(grossesSommes)
console.table(somme)

  */

/* EXO6 */
/*  let donnees = [
  17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100
];

let typeString=[]
let typeNumber=[]
let typeObject=[]
let typeAutre=[]

donnees.forEach(element => {
    if (typeof  element== "string") {
    typeString.push(element)
    
  } else if (typeof element == "number") {
    typeNumber.push(element)
  }else if (typeof element == "object"){
    typeObject.push(element)
  }else {
    typeAutre.push(element)
  }
 
 });
console.log(typeString);

console.log(typeNumber);

console.log(typeObject);

console.log(typeAutre); */


 /* EXO4_BOUCLES-while.md */


 /* EXO1 */


/* let chiffre = parseInt(prompt("choissez un chiffre"))

let compteur = 0

while (compteur <= chiffre) {
  console.log(compteur);
  compteur++;
}


 */

/* EXO2 */
/*  let classe= [
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
]
let i=0

while (classe.length>i) {

  console.log("Bonjour "+classe[i]);
  i++;
}
 */

 /* let classe =[
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 while (classe.length>i) {
   console.log("bonjour "+classe[i]);
   i++;
 } */


 /* let tabl=[
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 while (tabl.length>i) {
   console.log("bonjour "+ tabl[i]);
   i++;
 } */

 /* let classe = []

 let nombre = parseInt(prompt("donne moi un nombre max d'étudiants dans la classe "))

 while (classe.length<nombre) {
   classe.push(prompt("donne moi un nom a push"))
   
 }
 console.log(classe); */

/* EXO1 */
/* let chiffre = parseInt(prompt("choisissez un chiffre"))

let compteur = 0


do { 
  console.log(compteur);
  compteur++;
} while (compteur <= chiffre);
 */

 /* EXO2 */

 let classe = [
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 do {
   console.log("Salut "+classe[i]);
   i++;
 } while (classe.length>i); 

 /* EXO3 */


 /* let fruit = [
   "muss","abdel","said","mahad","gauthii","banane"
 ]

 let i = 0

 do {
   i--
   console.log(fruit);
 } while (fruit.shift());
  */