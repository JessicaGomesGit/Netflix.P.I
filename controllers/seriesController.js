const seriesController= {
  index: (req, res)=> {
      res.render("series", {title: "series"})
    },
    addFavorito: (req, res)=> {
     const { idSerie , idUsuario } = req.params
console.log(req.params)
      res.json( {
        title: "adicionar-minha-lista", 
        filme: idSerie,
        usuario: idUsuario
      })
    },
}

module.exports = seriesController