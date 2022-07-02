const controllerFilmes = {
    index: (req, res)=> {
        res.render("filmes", {title: "filmes"})
      },
      addFavorito: (req, res)=> {
       const { idFilme , idUsuario } = req.params
console.log(req.params)
        res.json( {
          title: "adicionar-minha-lista", 
          filme: idFilme,
          usuario: idUsuario
        })
      },
}

module.exports = controllerFilmes