import dinoJson from './dino.json' assert {type: 'json'}

const btn = document.querySelector('#btn');

btn.addEventListener('click',() =>{
    let humanData = fetchHumanData();

  })

 // Create Dino Constructor
 function Dino( species, weight, height, diet, where, when, fact){
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

 // Create Dino Objects
const dinosData = dinoJson.Dinos.map(dino =>{
    let { species, weight, height, diet, where, when, fact } = dino;
    return new Dino(species, weight, height, diet, where, when, fact )
})

// Create Human Object
const humanObj = {};

// Use IIFE to get human data from form
const fetchHumanData = () => {
    return (function() {
        const name = document.querySelector('#name').value || "Jon Doe";
        const height_feet = parseInt(document.querySelector('#feet').value) || 0;
        const height_inches = parseInt(document.querySelector("#inches").value) || 0;
        const height = height_feet * 12 + height_inches; 
        const weight = document.querySelector("#weight").value || 0;
        const diet = document.querySelector("#diet").value.toLowerCase();
        
        humanObj.name = name;
        humanObj.height = height;
        humanObj.weight = weight;
        humanObj.diet = diet
        return humanObj;
      }
    )();
  }

// Create Dino Compare Method 1
Dino.prototype.dietCompare = function(human){
    if (this.diet ===  human.diet) {
      this.fact = `Both ${this.species} and ${human.name} are ${this.diet} `;
      return this.fact;    
    } else {
      this.fact = `${this.species}
          is ${this.diet} but ${human.name} is ${human.diet} `;
      return this.fact;    
    }
}
    
// Create Dino Compare Method 2
Dino.prototype.heightCompare = function(human){
    if (this.height > human.height) {
        this.fact = `${this.species} is larger than ${human.name}`;
        return this.fact;    
    } else {
      this.fact = `${this.species} is smaller than ${human.name}`;
        return this.fact;    
    }
}
    
// Create Dino Compare Method 3
Dino.prototype.weightCompare = function(human){
    if (this.weight > human.weight) {
        this.fact = `${this.species} is heavier than ${human.name}`;
        return this.fact;    
    } else {
      this.fact = `${this.species} weigh less than ${human.name}`;
        return this.fact;    
    }
}

//Helper methods

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function randomFact(dinoFact, humanFact){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
      case 1:
        dinoFact.dietCompare(humanFact)
          break;
      case 2:
        dinoFact.heightCompare(humanFact)
          break;
      case 3:
        dinoFact.weightCompare(humanFact)
          break;
    }
  }

//Sources
  /** fetching json with async  */
 // https://dmitripavlutin.com/javascript-fetch-async-await/

 /** Shuffle an Array of Items **/
 //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/