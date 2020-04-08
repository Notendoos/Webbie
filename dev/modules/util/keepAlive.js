require('dotenv').config()
const http = require('http')

http.createServer((req,res)=>{
    res.write('I\'m a robot beep boop')
    res.end
}).listen(process.env.PORT || 3000 )