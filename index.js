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
        if(validate.message(msg)[0] !== 0){
            try{
                const command = require(`@dev/commands/${validate.command(msg)}`)
                command.init(msg)
            }catch(err){
                console.log(err)
            }
        }
    }
})

client.login(token)