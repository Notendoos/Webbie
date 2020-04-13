const {resolve} = require('path')
const command = require('./dev/modules/commands/command')
const classLoader = require('./dev/modules/util/classLoader')

const commandMatcher = new RegExp("\\s*(\\w+)\\s*(\\w*)")

class MessageHandler {
    constructor() {
        let commands = classLoader(resolve("./dev/modules/commands/impl"), command.classSymbol)
        this.commandMap = commands.reduce((map, command) => {
            map[command.getMatcher()] = command
            return map
        })
    }

    handle(msg) {
        console.debug("Handling msg: " + msg.content)

        if (msg.content.search(commandMatcher) === -1) {
            msg.channel.send("Hey") // when someone just sends 'webbie'
            return
        }

        let command = msg.content.replace(commandMatcher, "$1")
        console.debug("Handling command: " + command)

        let commandHandler = this.commandMap[command]
        if (commandHandler === undefined) { // it is a map, null wont work here :(
            console.debug("Could not find handler for command: " + command)
            msg.channel.send("Sorry, I did not get that :(")
            return
        }

        msg.content = msg.content.replace(commandMatcher, "$2")
        commandHandler.consume(msg)
    }
}

module.exports = MessageHandler


