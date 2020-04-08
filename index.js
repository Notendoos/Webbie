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
        if(validate.message(msg)[0] !== 0 && validate.message(msg) !== false){
            fs.readdir(mainDir,(err,files)=>{
                const newFiles = files.map(file=>
                    file.split('.js')[0]
                )
                
                const command = newFiles.find(el => el == validate.command(msg))
                try{
                    command == 'help' ? require(`${mainDir}/${command}`).init(client,msg,newFiles) : command ? require(`${mainDir}/${command}`).init(client,msg) : msg.channel.send('Sorry, I didn\'t quite get what you mean!')
                }catch(err){
                    console.log(err)
                    msg.channel.send('Oops! looks like my wires are al discombobulated. Ask for help from these monkeys ')
                }
            })
        }
    }
})

client.login(token)