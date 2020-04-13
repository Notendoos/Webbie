const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "ping"
    }

    getDescription() {
        return "pong"
    }

    consume(msg) {
        msg.channel.send('pong')
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = EchoCommand;