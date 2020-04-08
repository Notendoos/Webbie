function uncage(client,msg){
    msg.channel.send(`http://www.placecage.com/${Math.round(Math.random()*50)+150}/${Math.round(Math.random()*50)+150}`)
}

module.exports = uncage