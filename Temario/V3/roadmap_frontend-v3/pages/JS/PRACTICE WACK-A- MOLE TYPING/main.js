
// Declare our variables

// instantiates "inicio" & brings forth a the button "inicio" and a 'click' event  
const inicio = document.querySelector('#btnInicio').addEventListener('click',startGame);
//instantiates "holes" & brings forth ALL the <div> with the class name .hole
const holes = document.querySelectorAll('hole');
//instantiates "scoreBoard" & brings forth the element <span> with teh class name .score
const socreBoard = document.querySelector('.score')
//instantiates "inicio" & brings ALL <div> elememts  with class name .mole
const moles = document.querySelectorAll('.mole');
// last mole shown so that the hole will not repeat
let lastHole;
//time valididty of the game 
let timeUp = false;
//scoreing
let score = 0;

// start 

// first fuction called upon by the event click ejectuded with "inicio" button
function startGame(){
// starts score at 0
scoreBoard.textContent = 0;
//Asures that timeUp is set at false
timeUp = 0;
//calls on the "asomar() function to show the "mole" elements
asomar();
//start the timer makingt the bariable timeUp true for 10 seconds
setTimeout(() => timeUp = true, 10000)
}

// next function makes the mole appear and disappear

 function asomar() {
// instantiates "t" and starts a random variable between 2.0 & 1 second calling the randomTime function
const t = randomTime(200,1000)
// instantiates "hole" & brings forth 1 of 6 holes calling on the "escogerHole" fucntion & sending it the "holes" nodeList
const hole = escogerHole(holes);
// the hole appears adding
holes.classList.add('up');
//sets a timer to remove the "up" class & verifies that timeUp is valid before calling on itself again
// the titming of the invervals is random and saved in the const "t"
setTimeout(() => {
hole.classList.remove('up');
if(!timeUp) asomar()f{
console.log('Ah nah thats the same one bud')
}
})

 }


