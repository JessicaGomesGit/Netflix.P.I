const controllerAdmin = {
    index: (req, res)=> {
        res.render("admin", {title: "administrator"})
      },

}

module.exports = controllerAdmin