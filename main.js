import './style.css'

//? **************************************//
//? Exercice : DOM                        //
//? **************************************//
let userData = {
	name: `Moss`,
	email: `moss@itcrowd.com`,
	age: 35,
	hobby: `paper toss`,
	img: `https://www.hallofseries.com/wp-content/uploads/2021/12/it-crowd.jpg`
}
//<div id="userData"></div>
// On récupère "l'adresse" de l'élément
let userDataDiv = document.querySelector('#userData');

// On crée un élément img, on donne ses attributs
let picture = document.createElement('img');
picture.src = userData.img;
picture.style.maxHeight = '200px';
// Nom
let name = document.createElement('H1');
name.innerText = userData.name;
// email
let email = document.createElement('p');
email.innerText = userData.email;
// age
let age = document.createElement('p');
age.innerText = userData.age;
// hobby
let hobby = document.createElement('p');
hobby.innerText = userData.hobby;

// On met en forme
// le cadre
userDataDiv.style.color =  'black';
userDataDiv.style.marginLeft =  '100px';
userDataDiv.style.padding =  '50px';
userDataDiv.style.border =  'solid 5px chartreuse';
userDataDiv.style.backgroundColor = '#5a5a5a';
//l'image
picture.style.border =  'solid 5px chartreuse';
//le texte sauf le 1er
email.style.color =  'white';
age.style.color =  'white';
hobby.style.color =  'white';

// on intègre les éléments dans l'odre (sauf indication autre)
userDataDiv.append(picture);
userDataDiv.append(name);
userDataDiv.append(email);
userDataDiv.append(age);
userDataDiv.append(hobby);