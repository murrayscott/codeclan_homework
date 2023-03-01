const assert = require('assert')
const Park = require('../models/park.js')
const Dinosaur = require('../models/dinosaur.js')

describe('Park', function () {
  let dinosaur1
  let dinosaur2
  let park
  beforeEach(function () {
    
    dinosaur1= new Dinosaur ('t-rex','carnivore',50, false)
    dinosaur2= new Dinosaur ('diplodocus','herbivore',50, false)
    park = new Park ('jurasic',89,[dinosaur1])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual (actual, 'jurasic')
  })

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual (actual, 89)
  })

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs[0]
    assert.deepStrictEqual (actual, dinosaur1)
  })

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur2)
    const actual = park.dinosaurs[1]
    const expected = dinosaur2
    assert.deepStrictEqual (actual, expected)
  })
    
  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur2)
    park.deleteDinosaurByIndex(0)
    const actual = park.dinosaurs[0].deleted
    const expected = true
    assert.strictEqual (actual, expected)
  })

  it('should be able to find the dinosaur that attracts the most visitors')

  it('should be able to find all dinosaurs of a particular species')

  it('should be able to calculate the total number of visitors per day')

  it('should be able to calculate the total number of visitors per year')

  it('should be able to calculate total revenue for one year')

})
