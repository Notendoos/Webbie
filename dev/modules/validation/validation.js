function message(msg){
    const check = msg.content.toLowerCase().match('webbie')
    if(check != null){
        if(check['index'] == 0){
            return check
        }else{
            return false
        }
    }else{
        return false
    }
}

function command(msg){
    const content = msg.content
    const contentArr = content.split('webbie ')
    if(contentArr.length == 1){
        return false
    }else{
        return contentArr[1].split(' ')[0]
    }

}

module.exports = {message,command}

