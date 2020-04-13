require('dotenv').config()
require('module-alias/register')

const botPrefix = 'webbie'
const botMessageMatcher = new RegExp("\\s*" + botPrefix + "\\s*(\\w*)")

const discord = require('discord.js')
const client = new discord.Client()
const messageHandler = new (require("./messageHandler"))()

client.on('ready', () => {
    console.log('We\'re in bois')
})

client.on('message', (msg) => {
    if (msg.author.id !== client.user.id && msg.content.search(botMessageMatcher) !== -1) {
        msg.content = msg.content.replace(botMessageMatcher, "$1")
        messageHandler.handle(msg)
    }
})

client.login(process.env.TOKEN).then(r => {
    console.log(`Logged in! msg: ${r}`)
})


