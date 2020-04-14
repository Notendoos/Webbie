const {Command} = require("../command");

class EvalCommand extends Command {

    getMatcher() {
        return "eval"
    }

    getDescription() {
        return "eval"
    }

    consume(msg) {
        msg.channel.send('Didn\'t think so bucko')
            .then(r => console.debug("Send message! response: " + r))
    }
}

module.exports = EvalCommand;