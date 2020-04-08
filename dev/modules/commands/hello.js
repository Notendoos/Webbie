function init(client,msg){
    msg.channel.send(`Hello ${msg.author}! I'm Webbie!`)
}

module.exports = {init, desc:'Makes me say hi.'}