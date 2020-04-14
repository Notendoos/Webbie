const fetch = require('node-fetch');
const {MessageAttachment} = require('discord.js');
const {Command} = require("../command");

class EchoCommand extends Command {

    getMatcher() {
        return "pokemon"
    }

    getDescription() {
        return "retrieves a beautiful Pokemon"
    }

    async consume(msg) {
        if (msg.content === '') {
            msg.channel.send("You need to specify a pokemon!")
                .then(r => console.debug("Send message! response: " + r));
            return
        }

        const uri = 'https://pokeapi.co/api/v2/pokemon/';

        fetch(uri + msg.content.split(" ")[0])
            .then(res => res.json().catch(err => false))
            .then(pokemon => {
                if (pokemon) {
                    msg.channel.send(`Say hello to ${capitalizeFirstLetter(pokemon.name)}`, new MessageAttachment(pokemon.sprites.front_default))
                        .then(r => console.debug("Send message! response: " + r));
                } else {
                    msg.channel.send(`I couldn't find this pokemon! Maybe try another?`)
                        .then(r => console.debug("Send message! response: " + r));
                }
            });
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = EchoCommand;
