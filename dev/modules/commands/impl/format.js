const {Command} = require("../command")

class FormatCommand extends Command {

    getMatcher() {
        return "format"
    }

    getDescription() {
        return "Formatter command"
    }

    consume(msg){
        const content = msg.content.split('webbie format')
        return `\`\`\`${lang}\n${code}\n\`\`\``
    }
}

module.exports = FormatCommand