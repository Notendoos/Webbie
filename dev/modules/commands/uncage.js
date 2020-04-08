function init(client,msg){
    msg.channel.send(`http://www.placecage.com/${Math.round(Math.random()*50)+150}/${Math.round(Math.random()*50)+150}`)
}

module.exports = {init, desc:'Makes me send an unspeakable image.'}
