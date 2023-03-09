const qwerty = document.querySelector("#qwerty");

const phrase = document.querySelector("#phrase");

let btn__reset = document.querySelector(".btn__reset");

const overlay = document.querySelector("#overlay");

const scoreboard = document.querySelector("#scoreboard");

let hearts = document.querySelectorAll(".tries img");



let missed = 0;

// let missed =  arr => {

//     let try = document.querySelector("#scoreboard") 
   

//     for( let i = 0; i < try.length; i++;) {

//         if (try[i] === null {

//         }
    
//    return match
//  };


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




  // return a random phrase from an array
  const getRandomPhraseAsArray = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
    
 
  }
  


  // adds the letters of a string to the display
  const addPhraseToDisplay = arr => {
    
    const list = document.querySelector('ul');
   for( let i = 0; i < arr.length; i++) {
   const ab = document.createElement("li");
    ab.append(arr[i]);
    
   
    if (arr[i] === " "){
        ab.classList.add("space") 

    } else {
        ab.classList.add("letter")

    }


    
    list.append(ab);

   }

  }

  const ph = getRandomPhraseAsArray(phrases) 
  console.log(ph)
  addPhraseToDisplay(ph)

  
  // check if a letter is in the phrase
const checkLetter = button => {

    let ch = document.querySelector('ul').children
    let match = null;

    for( let i = 0; i < ch.length; i++){

        if (ch[i].innerHTML === button.innerHTML){
            ch[i].classList.add("show")
           
match = button.innerHTML
        }
    }
   return match;
}
// } else if (ch[i].innerHTML !== button.innerHTML) {
//     ch[i].classList.remove("show")

// }

// let letterFound = button => {

//  ab.classList.("letter")
// });


  //check if the game has been won or lost
 const checkWin = () => {
   let letter = document.querySelectorAll(".letter")
   let show =  document.querySelectorAll(".show")
console.log(letter, show)
   if (letter.length === show.length){
overlay.classList.add("win")
overlay.style.display = 'flex';
   }
 } 

  // listen for the start game button to be pressed
  //startButton.addEventListener('click', () =>) {


  //}

  // listen for the onscreen keyboard to be clicked
  qwerty.addEventListener('click', e => {
const button = e.target
button.classList.add("chosen")
const result = checkLetter(button)

if (result === null) {
    hearts[missed].src = "images/lostHeart.png"
    missed++
  }
checkWin()
});
