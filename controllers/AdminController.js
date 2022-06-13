const controllerAdmin= {
    index: (req, res)=> {
        res.render("Admin", {title: "Admin"})
      },

}

module.exports = controllerAdmin