const {resolve} = require('path');
const command = require('../command');
const classLoader = require('../../util/classLoader');
const {Command} = require("../command");

// Todo: need a better solution for this to prevent loading certain sources multiple times
const commands = classLoader(resolve("./dev/modules/commands/impl"), command.classSymbol);

class HelpCommand extends Command {

    constructor() {
        super();
        this.commandDescriptionMap = [{}].concat(commands).reduce((map, command) => {
            map[command.getMatcher()] = command.getDescription();
            return map;
        });
    }

    getMatcher() {
        return "help"
    }

    getDescription() {
        return "I list the available commands!"
    }

    consume(msg) {
        if (msg.content === '') { // list all commands
            console.debug("Help requested, listing all commands: ");
            let str = '# Webbie Commands \n\n' + Object.entries(this.commandDescriptionMap)
                .map(command => `* ${command[0]}\n\t-> ${command[1]}\n`)
                .join('');

            msg.channel.send(`\`\`\`markdown\n${str}\n\`\`\``)
                .then(r => console.debug("Send message! response: " + r));
        } else {
            console.debug("Help requested for command: " + msg.content);
            let description = this.commandDescriptionMap[msg.content];

            if (description === undefined) {
                msg.channel.send("This command is unknown! :(")
                    .then(r => console.debug("Send message! response: " + r));
                return
            }

            msg.channel.send(`\`\`\`markdown\n# Command: ${msg.content}\n-> ${description}\`\`\``)
                .then(r => console.debug("Send message! response: " + r));
        }
    }
}

module.exports = HelpCommand;