function init(client,msg){
    const content = msg.content
    const param = content.split('webbie eval ')[1]
    console.log(msg.content)
    msg.channel.send('Didn\'t think so bucko')
}

module.exports = {init, desc: 'eval'}