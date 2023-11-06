import dinoJson from './dino.json' assert {type: 'json'}

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

const dinosData = dinoJson.Dinos.map(dino =>{
    let { species, weight, height, diet, where, when, fact } = dino;
    return new Dino(species, weight, height, diet, where, when, fact )
})
