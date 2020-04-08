require('dotenv').config()
require('module-alias/register')
const discord = require('discord.js')
const client = new discord.Client()
const token = process.env.TOKEN
const keepAlive = require('@dev/util/keepAlive')
const validate = require('@dev/validation/validation')

client.on('ready',()=>{
    console.log('We\'re in bois')
})

client.on('message', msg =>{
    if(msg.author.id != client.user.id){
        validate.message(msg) && validate.command(msg)
    }
})

client.login(token)

