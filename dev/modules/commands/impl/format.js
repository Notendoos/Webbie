const {Command} = require("../command");

class FormatCommand extends Command {

    getMatcher() {
        return "format"
    }

    getDescription() {
        return "I format code to markdown! I don\'t validate, That\'s on you!d"
    }

    consume(msg) {
        if (msg.content !== '') {
            const code = msg.content.split(' ');
            msg.channel.send(`\`\`\`${code[0]}\n${code.slice(1, code.length).join(' ')}\n\`\`\``)
                .then(r => console.debug("Send message! response: " + r));
        } else {
            msg.channel.send('Give a flavor to format your code in!')
                .then(r => console.debug("Send message! response: " + r));
        }
    }
}

module.exports = FormatCommand;