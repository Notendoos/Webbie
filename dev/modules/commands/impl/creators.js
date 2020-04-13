const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "creators"
    }

    getDescription() {
        return "These folks made me!"
    }

    consume(msg) {
        msg.channel.send('```\nMade by Senpaizuri and Xiving (@Github)\nMIT License\n```')
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = EchoCommand;