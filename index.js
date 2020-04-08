require('dotenv').config()
require('module-alias/register')
const discord = require('discord.js')
const client = new discord.Client()
const token = process.env.TOKEN
const keepAlive = require('@dev/util/keepAlive')
const validate = require('@dev/validation/validation')
const fs = require('fs')
const mainDir = './dev/modules/commands'

client.on('ready',()=>{
    console.log('We\'re in bois')
})

client.on('message', msg =>{
    if(msg.author.id != client.user.id){
        if(validate.message(msg)[0] !== 0){
            fs.readdir(mainDir,(err,files)=>{
                const newFiles = files.map(file=>
                    file.split('.js')[0]
                )
                
                const command = newFiles.find(el => el == validate.command(msg))
                command ? require(`${mainDir}/${command}`)(client,msg) : msg.channel.send('Sorry, I didn\'t quite get what you mean!')
            })
        }
    }
})

client.login(token)