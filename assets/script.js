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
const dots = document.querySelectorAll('.dot'); 			/** all car 4 dot **/

const nbElements = slider.childElementCount; /* compte le nombre d'enfant */

let i = 0;

right.addEventListener('click', () => {
    if(i < nbElements - 4)
        i++;
    else
        i = 0;

    updateSlider(i);
});

left.addEventListener('click', () => {
    if(i > 0)
        i--;
    else
        i = nbElements - 4;

    updateSlider(i);
});