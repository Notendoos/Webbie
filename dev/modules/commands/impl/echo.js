const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "echo"
    }

    getDescription() {
        return "Echoes command"
    }

    consume(msg) {
        msg.channel.send(msg.content)
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = EchoCommand;