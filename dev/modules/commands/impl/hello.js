function init(client, msg) {

}

const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "hello"
    }

    getDescription() {
        return "Makes me say hi."
    }

    consume(msg) {
        msg.channel.send(`Hello ${msg.author}! I'm Webbie!`)
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = EchoCommand;