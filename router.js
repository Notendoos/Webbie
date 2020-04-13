const {resolve} = require('path');
const command = require('./dev/modules/commands/command');
const classLoader = require('./dev/modules/util/classLoader');

const commandMatcher = new RegExp("(\\w+)(\\s+(\\w.*)|\\s*)");

class Router {
    constructor() {
        let commands = classLoader(resolve("./dev/modules/commands/impl"), command.classSymbol);
        console.debug("=== Init Command Router ===");
        this.commandMap = [{}].concat(commands).reduce((map, command) => {
            map[command.getMatcher()] = command;
            return map
        });
        console.debug(`Available commands: ${Object.keys(this.commandMap).join(", ")}`)
    }

    route(msg) {
        console.debug(`=== Rx: ${msg.content}`);

        if (msg.content.search(commandMatcher) === -1) {
            msg.channel.send("Hey")
                .then(r => console.debug("Send message! response: " + r)); // when someone just sends 'webbie'
            return
        }

        let command = msg.content.replace(commandMatcher, "$1");
        console.debug("Handling command: " + command);

        let commandHandler = this.commandMap[command];
        if (commandHandler === undefined) { // it is a map, null wont work here :(
            console.debug("Could not find handler for command: " + command);
            msg.channel.send("Sorry, I did not get that :(")
                .then(r => console.debug("Send message! response: " + r));
            return
        }

        msg.content = msg.content.replace(commandMatcher, "$3");
        commandHandler.consume(msg)
    }
}

module.exports = Router;


