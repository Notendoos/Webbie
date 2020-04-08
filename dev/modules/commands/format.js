function init(client,msg){
    const content = msg.content.split('webbie format')
    msg.channel.send(`\`\`\`${lang}\n${code}\n\`\`\``)
}

module.exports = {init, desc:'I format code to markdown!'}