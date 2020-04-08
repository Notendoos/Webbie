const {Command} = require("../command")

class UncageCommand extends Command {

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

module.exports = UncageCommand