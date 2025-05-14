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

/** 4 const : bannière, flèche gauche et droite, 4 dot, manque arrow ? **/

const img = document.querySelector('.banner-img');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots'); 			
const nbElements = slides.length; /** length, fonction ou attribut **/

let i = 0;




right.addEventListener('click', () => {
	i=i++ %slides.length 

    updateSlides(i); /** affiche moi **/
});

left.addEventListener('click', () => {
    if(i > 0){
        i--;
	}
    else {
        i = - slides.length;
	}
    updateSlides(i);
});

function updateSlides(i) {

	const caroussel = slides[i];
		const img = document.querySelector(".banner-img");
		// Met à jour l'image
		img.setAttribute("src" , "../assets/images/slideshow/"+ caroussel.image);

		const p = document.querySelector(".banner-txt");
		p.innerHTML= caroussel.tagLine;

		// check
		console.log("Slide affichée :", slides[i].jpg);
}

