require('dotenv').config()
const discord = require('discord.js')
const client = new discord.Client()
const token = process.env.TOKEN
const keepAlive = require('./dev/modules/util/keepAlive')
const validate = require('./dev/modules/validation/validation')

client.on('ready',()=>{
    console.log('We\'re in bois')
    console.log(client.user)
})

client.on('message', msg =>{
    if(msg.author.id != client.user.id){
        console.log(validate.message(msg))
        validate.message(msg) && validate.command(msg)
    }
})

client.login(token)

