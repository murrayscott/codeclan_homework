const Dinosaur = function (species, diet, guestsAttractedPerDay, deleted) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
  this.deleted = false;
}

module.exports = Dinosaur;
