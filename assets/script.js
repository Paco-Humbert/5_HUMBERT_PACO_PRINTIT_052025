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

dots ()
const listDot = document.querySelectorAll(".dot");
const img = document.querySelector(".banner-img");
const p = document.querySelector(".banner-txt");
updateSlides(i)

right.addEventListener('click', () => {
	i=(i+1) %slides.length; 
    updateSlides(i);  
});

left.addEventListener('click', () => {
    i = (i - 1 + slides.length) % slides.length;
	updateSlides(i);
});


function updateSlides(i) {
	const caroussel = slides[i];
		// Met à jour l'image
		img.setAttribute("src" , "./assets/images/slideshow/"+ caroussel.image); // setAttribute : modifie l'attribut du HTML, ici la source
		// Texte associé à la slide
		p.innerHTML= caroussel.tagLine; //innerHTML : modifie le contenu HTML
	updateDot (i);
}

function dots () {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++){  // sert à créer autant de dot qu'il y'a de slides
		const dot = document.createElement("div");
		dots.appendChild(dot)
		dot.setAttribute("class", "dot");
		dot.addEventListener('click', () => {
			updateSlides(i)
		})
 	}
}

function updateDot (i) {
		for (let j = 0; j < listDot.length; j++) { // Création d'un index pour DOT
			const dot = listDot[j];
				if (j == i){
					dot.classList.add('dot_selected');		
			}
				else{
					dot.classList.remove('dot_selected');	 
			}
		}  
}

