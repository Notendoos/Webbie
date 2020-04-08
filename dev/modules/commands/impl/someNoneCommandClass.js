
// Shouldn't break any class loader shit
class StupidClass {

  getMatcher() {
    return "uncage"
  }

  getDescription() {
    return "Uncage command"
  }

  consume(msg){
    return "CAGE!"
  }
}

module.exports = StupidClass