function init(client,msg,commandos){
    const content = msg.content
    const param = content.split('webbie help ')
    if(param[0] == ''){
        let commando = commandos.find(command => command == param[1])
        commando && msg.channel.send(`\`\`\`markdown\n# Command: ${commando}\n-> ${require('./'+commando).desc}\`\`\``)
    }else{
        let str = '# Webbie Commands \n\n' +commandos.map(command => {return `* ${command} \n  -> ${require('./'+command).desc}\n`} ).join('')
        msg.channel.send(`\`\`\`markdown\n${str}\n\`\`\``)
    }
}

module.exports = {init, desc: 'I list the available commands!'}