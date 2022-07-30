function auth(req,res,next){
    if(typeof(req.session.usuario)!="undefined"){
        return next()}
        else{
            return res.send("você precisa estar logado para acessar")
        }
    }
module.exports=auth