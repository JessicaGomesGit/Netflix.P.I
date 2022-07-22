const { User } = require('../models')

const controller = {
  index: async (req, res, next) => {
    const usuarios = await User.findAll()
    res.json(usuarios);
  }
}

module.exports = controller