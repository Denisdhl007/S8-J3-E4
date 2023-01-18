// // // # 1. 
// // // - Récupère la div dont l'id est #content
// // // - Ajoute un h2 dedans
// // // - Ajoute le texte suivant au h2 "Part 6 - Exercice 1" 

let div = document.getElementById(`content`);
console.log(div);
let h2 = document.createElement('h2');
h2.innerText = "Part 6 - Exercice 1";
div.appendChild(h2);

// // // # 2.
// // // - Créer un paragraphe avec du lorem ipsum
// // // - Ajoute le apres le h2

// let h2_1 = document.createElement('h2');
// h2_1.innerText = "Part 6 - Exercice 1";
// div.appendChild(h2_1);


let p = document.createElement('p')
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.'
div.appendChild(p);


// // // # 3.
// // // - Créer un h1 
// // // - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// // // - Place le en premier enfant de la div #content

let h1 = document.createElement('h1');
h1.innerText = "Le DOM - Création de HTML";
let firstChild = div.h2;
div.insertBefore(h1, h2);



// // // # 4.
// // // - Prend le contenu de la div #content
// // // - Copie le dans la div #secondaire
// // // - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire

// let content = document.getElementById('content');
// let secondaire = document.getElementById('secondaire');
// secondaire.innerHTML = content.innerHTML;

// let h2New1 = h2;
// h2New1.textContent = "Part 6 - Exercice 2";



let content_contenu = div.innerHTML;
let div_secondaire = document.getElementById("secondaire");

div_secondaire.innerHTML = content_contenu;

div_secondaire.querySelector("h2").innerText = "Part 6 - Exercice 2";





// // // # 5.
// // // - Créer une nouvelle div #matiere
// // // - Créer une liste ordonnée des 3 dernières choses que tu as appris

let matiere = document.createElement('div');
matiere.id = 'matiere';
document.body.appendChild(matiere);
console.log(matiere);

let liste = document.createElement('ol');
let fonctions = document.createElement('li');
fonctions.innerHTML = 'fonctions';
let creatElement = document.createElement('li');
creatElement.innerHTML = 'creatElement';
var appendChild = document.createElement('li');
appendChild.innerHTML = 'appendChild';
liste.appendChild(fonctions);
liste.appendChild(creatElement);
liste.appendChild(appendChild);
document.body.appendChild(liste);




// let body = document.body;
// console.log(body);
// // creation d'element.

// let monTitre = document.createElement('h1');
// monTitre.innerText = 'Bonjour la coding';
// body.appendChild(monTitre);

// // Creation d'un bouton.

// let btn = document.createElement('button');
// btn.textContent = 'cliquez-ici';
// btn.classList.add('bachir');    
// console.log(btn);

// let myDiv = document.createElement('div');
// myDiv.appendChild(btn);
// body.appendChild(myDiv);

// let btn2;
// btn.addEventListener('click', ()=>{
//     btn2 = document.createElement('button');
//     myDiv.appendChild(btn2);
//     myDiv.style.backgroundColor='red';
//     btn2.textContent = 'cliquez-ici';
//     btn2.style.color='blue';
//     // btn.style.display='none';    
// },{once:true})