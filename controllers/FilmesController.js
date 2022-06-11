const controller = {
    index: (req, res)=> {
        res.render("filmes", {title: "filmes"})
      },

}

module.exports = controller