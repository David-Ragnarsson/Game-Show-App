const qwerty = document.querySelector("#qwerty");

const phrase = document.querySelector("#phrase");

const btn__reset = document.querySelector(".btn__reset");

const overlay = document.querySelector("#overlay");

var missed =

btn__reset.addEventListener('click', () => {
    overlay.style.display = 'none';
});


const phrases = [
    'I Love Pizza',
    'JavaScript is Cool',
    'I Love Chocolate',
    'Timing is everything',
    'Coffee Beans'
];

const getRandomPhraseAsArray = phrases[Math.floor(Math.random() * phrases.length)];


  // return a random phrase from an array
  //const getRandomPhraseAsArray = arr => {

// xx
  //}
  


  // adds the letters of a string to the display
  //const addPhraseToDisplay = arr => {


  //}

  // check if a letter is in the phrase
  //const checkLetter = button => {


  //}

  //check if the game has been won or lost
  //const checkWin = {} => {


  //}

  // listen for the start game button to be pressed
  //startButton.addEventListener('click', () =>) {


  //}

  // listen for the onscreen keyboard to be clicked
  //qwerty.addEventListener('click', e => {


  //});
