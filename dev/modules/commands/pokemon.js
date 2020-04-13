const fetch = require('node-fetch')
const {MessageAttachment} = require('discord.js')
async function init(client,msg){
    const content = msg.content
    const param = content.split('webbie pokemon ')[1]
    const uri = 'https://pokeapi.co/api/v2/pokemon/'
    const pokemon = await fetch(uri + param).then(res => res.json().catch(err=>false))

    if(pokemon){
        msg.channel.send(`Say hello to ${capitalizeFirstLetter(pokemon.name)}`,new MessageAttachment(pokemon.sprites.front_default))
    }else{
        msg.channel.send(`I couldn't find this pokemon! Maybe try another?`)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {init, desc:'retrieves a beautiful Pokemon'}