LoginForm:(req,res)=>{
    res.render('login')
};
logarUsuario:(req,res)=>{
    let {email,senha}= req.body;
    let usuarioSalvo= fs.readFileSync(usuarioJson,{encoding:'utf-8'});
    usuarioSalvo= JSON.parse(usuarioSalvo);
    if(email !=usuarioSalvo.email){
        return res.send('Usuario Invalido!')
    }
    if (!bcrypt.compareSync(senha, usuarioSalvo.senha)){
        return res.send("Senha invalida!")
    }
    req.session.usuario= usuarioSalvo
    res.redirect('/destaque')


}