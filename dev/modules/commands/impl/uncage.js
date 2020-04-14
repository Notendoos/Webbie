const {Command} = require("../command");

class UncageCommand extends Command {

    getMatcher() {
        return "uncage"
    }

    getDescription() {
        return "Uncage command"
    }

    consume(msg) {
        msg.channel.send("CAGE!")
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = UncageCommand;