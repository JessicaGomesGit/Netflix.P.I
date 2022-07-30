const fs = require ('fs')
function logNetflix(req, res,next){
    fs.appendFileSync('log.txt', 'O usuario entrou na Url:' +req.url)
    next();

}
module.exports=logNetflix