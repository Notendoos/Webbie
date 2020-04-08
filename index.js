require('dotenv').config()
require('module-alias/register')
const discord = require('discord.js')
const client = new discord.Client()
const token = process.env.TOKEN

const { resolve } = require('path')
const command = require('./dev/modules/commands/command')
const classLoader = require('./dev/modules/util/classLoader')

const commands = classLoader(
    resolve("./dev/modules/commands/impl"),
    command.classSymbol
)

client.on('ready', () => {
  console.log('We\'re in bois')
})

client.on('message', msg => {
  if (msg.author.id !== client.user.id) {
    let messages = commands
        .filter(cmd => msg.content.includes(cmd.getMatcher())) // bru really? matcher requires improvements
        .map(cmd => cmd.consume(msg.content))

    messages.forEach(message => msg.channel.send(message))
  }
})

client.login(token).then(r => {
  console.log(`Logged in? msg: ${r}`)
})


