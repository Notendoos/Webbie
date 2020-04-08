const classSymbol = Symbol('command')

class Command {
  constructor() {
  }

  getDescription() {
    return "This command has no description!"
  }

  getMatcher() {
    return null
  }

  consume(msg) {
    return `I dont understand ${msg}`
  }

  get [classSymbol]() {
    return {
      getDescription: this.getDescription,
      getMatcher: this.getMatcher,
      consume: this.consume
    }
  }

}

module.exports = {Command, classSymbol}