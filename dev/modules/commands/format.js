function init(client,msg){
    const content = msg.content
    const flavor = content.split('webbie format ')
    if(flavor[0] == ''){
        const code = flavor[1].split(' ')
        msg.channel.send(`\`\`\`${code[0]}\n${code.slice(1,code.length).join(' ')}\n\`\`\``)
    }else{
        msg.channel.send('Give a flavor to format your code in!')
    }   
}

module.exports = {init, desc:'I format code to markdown! I don\'t validate, That\'s on you!'}