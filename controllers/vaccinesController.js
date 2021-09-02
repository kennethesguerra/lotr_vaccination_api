const { list } = require('../models/Vaccine');

const listVaccines = async (req, res) => {
  try {
    await list((error, result) => {
      if (error) {
        return res.json({
          message: error
        })
      }
      return res.json({result});
    })
  }
  catch(error) {
    res.json({message: error})
  }
} 

module.exports.listVaccines = listVaccines;

