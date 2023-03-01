const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice; 
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur) ;
}

Park.prototype.deleteDinosaurByIndex = function(index){
    this.dinosaurs.deleted = true ;
}

module.exports = Park;