const controllerFilmes = {
    index: (req, res)=> {
        res.render("filmes", {title: "filmes"})
      },

}

module.exports = controllerFilmes