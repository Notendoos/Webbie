const {Command} = require("../command");

class TestCommand extends Command {

    getMatcher() {
        return "test"
    }

    getDescription() {
        return "Test command"
    }

    consume(msg) {
        msg.channel.send('Testing 1 2 3... Is this on?')
            .then(r => console.debug("Send message! response: " + r));
    }
}

module.exports = TestCommand;