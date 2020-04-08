function code(msg){
    const content = msg.content.split('webbie format')
    msg.channel.send(`\`\`\`${lang}\n${code}\n\`\`\``)
}

module.exports = {code}