const {Command} = require("../command")

class TestCommand extends Command {

    getMatcher() {
        return "test"
    }

    getDescription() {
        return "Test command"
    }

    consume(msg){
        return 'Testing 1 2 3... Is this on?'
    }
}

module.exports = TestCommand