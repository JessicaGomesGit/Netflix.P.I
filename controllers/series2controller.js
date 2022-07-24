const { Serie } = require('../models')

const controller2 = {
  index: async (req, res, next) => {
    try {
      const series = await Serie.findAll()
       res.json(series);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = controller2