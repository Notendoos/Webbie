const classSymbol = Symbol('command')

class Command {
  /**
   * @Constructor
   * Not used
   * */
  constructor() {
  }

  /**
   * @returns {string} the command description
   * */
  getDescription() {
    return "This command has no description!"
  }

  /**
   * Should be used to check whether a command needs to be executed for a given message
   *
   * @returns {string} the command matcher
   */
  getMatcher() {
    return null
  }

  /**
   * @param msg a user message that should execute this command
   *
   * Right now a string, maybe later a tokenized representation of the user message?
   *
   * @returns {string} the message to return to the user
   */
  consume(msg) {
    return `I dont understand ${msg}`
  }

  /**
   * Only returns an instance of the command when the right Symbol object is used
   * As such it is possible to verify whether any object is an actual instance of the Command class
   * and not just happens to implement the same methods.
   *
   * @returns {{getMatcher: (function(): null), consume: (function(*): string), getDescription: (function(): string)}}
   */
  get [classSymbol]() {
    return {
      getDescription: this.getDescription,
      getMatcher: this.getMatcher,
      consume: this.consume
    }
  }

}

module.exports = {Command, classSymbol}