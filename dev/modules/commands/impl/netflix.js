const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "netflix"
    }

    getDescription() {
        return "You know what"
    }

    consume(msg) {
        msg.channel.send("and chill?")
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = EchoCommand;