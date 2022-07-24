const { Filme } = require('../models')

const controllerApi = {
  index: async (req, res, next) => {
    try {
      const filmes = await Filme.findAll()
       res.json(filmes);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = controllerApi