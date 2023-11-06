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