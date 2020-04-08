function init(client,msg,commandos){
    console.log(commandos)
    let str = commandos.map(command => {return `*${command}* -> ${require('./'+command).desc}\n`} ).join('')
    
    msg.channel.send(`\`\`\`markdown\n${str}\n\`\`\``)
}

module.exports = {init, desc: 'I list the available commands!'}