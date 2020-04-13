const {Command} = require("../command");

class GifModeCommand extends Command {

    getMatcher() {
        return "gifmode"
    }

    getDescription() {
        return "modifies gif mode 0/all: all gifs, 1/sfw: only sfw, 2/strict: no gifs allowed here"
    }

    consume(msg) {
        if (msg.content === '') {
            msg.channel.send('You need to supply me with a mode! Need help? try: `webbie help gifmode`')
                .then(r => console.debug("Send message! response: " + r));
            return
        }

        switch (msg.content.toLowerCase()) {
            case '0':
            case 'all':
                msg.channel.send('Gifmode set to [All] ❤')
                    .then(r => console.debug("Send message! response: " + r));
                break;
            case '1':
            case 'sfw':
                msg.channel.send('Gifmode set to [SFW] 🔞')
                    .then(r => console.debug("Send message! response: " + r));
                break;
            case '2':
            case 'strict':
                msg.channel.send('Dunking all gifs into the garbage bin 🏀')
                    .then(r => console.debug("Send message! response: " + r));
                break;
            default:
                msg.channel.send('You need to supply me with a valid mode! Need help? try: `webbie help gifmode`')
                    .then(r => console.debug("Send message! response: " + r));
                break;
        }
    }
}

module.exports = GifModeCommand;