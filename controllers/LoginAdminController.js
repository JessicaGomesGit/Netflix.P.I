const controllerLoginAdmin= {
    index: (req, res)=> {
        res.render("loginAdmin", {title: "LoginAdmin"})
      },

}

module.exports = controllerLoginAdmin