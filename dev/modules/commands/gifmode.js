function init (client,msg){
    const content = msg.content
    const param = content.split('webbie gifmode ')
    if(param[0] == ''){
        switch(param[1].toLowerCase()){
            case '0': 
            case 'all':
                msg.channel.send('Gifmode set to [All] ❤️')
                break;
            case '1': 
            case 'sfw':
                msg.channel.send('Gifmode set to [SFW] 🔞')
                break;
            case '2': 
            case 'strict':
                msg.channel.send('Dunking all gifs into the garbage bin 🏀')
                break;
            default:
                msg.channel.send('You need to supply me with a valid mode! Need help? try: `webbie help gifmode`')
                break;
        }
    }else{
        msg.channel.send('You need to supply me with a mode! Need help? try: `webbie help gifmode`')
    }
}

module.exports = {init,desc:'modifies gif mode 0/all: all gifs, 1/sfw: only sfw, 2/strict: no gifs allowed here'}