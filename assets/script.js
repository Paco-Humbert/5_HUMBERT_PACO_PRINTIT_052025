console.log("Script bien chargé !");

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');			
const nbElements = slides.length; // length 
let i = 0;

updateSlides(i)
dots ()
addDot ()

right.addEventListener('click', () => {
	i=(i+1) %slides.length; // Me garantie grâce au modulo que le chiffre final qui va sortir se situe obligatoirement dans [0...i-1]

    updateSlides(i); // Affiche moi 
});

left.addEventListener('click', () => {
    i = (i - 1 + slides.length) % slides.length;

	updateSlides(i);
});

function updateSlides(i) {

	const caroussel = slides[i];
		const img = document.querySelector(".banner-img");
		// Met à jour l'image
		img.setAttribute("src" , "../assets/images/slideshow/"+ caroussel.image); // setAttribute : modifie l'attribut du HTML, ici la source
		// Met à jour le texte
		const p = document.querySelector(".banner-txt");
		// Texte associé à la slide
		p.innerHTML= caroussel.tagLine; //innerHTML : modifie le contenu HTML
		// check
		console.log("Slide affichée :", slides[i].jpg);
}

function dots () {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++){  // sert à créer autant de dot qu'il y'a de slides
		const dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot) 
	}
}

function addDot () {
	const listDot = document.querySelectorAll(".dot");	
	for (let i = 0; i < listDot.length; i++) {
       
}
}
