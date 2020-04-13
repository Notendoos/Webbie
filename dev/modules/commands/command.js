const classSymbol = Symbol('command');
const {Message} = require("discord.js");

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
     * @param {Message} msg a user message that executes this command
     *
     * msg.content looses the message prefix, so if you send 'bot echo yeet' with 'bot' being the bot prefix, and 'echo' being the command
     * prefix, the msg.content received inside the EchoCommand handler will be just 'yeet'
     *
     * Right now a discord message, maybe later a more useful representation of the user message?
     */
    consume(msg) {
    }

    /**
     * Only returns an instance of the command when the right Symbol object is used
     * As such it is possible to verify whether any object is an actual instance of the Command class
     * and not just happens to implement the same methods.
     *
     * @returns {Command} a class that extends the Command class
     */

    static get [classSymbol]() {
        return new this();
    }
}

module.exports = {Command, classSymbol};