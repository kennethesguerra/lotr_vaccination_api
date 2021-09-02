const { list, create, update, remove } = require('../models/Vaccinee');

const listVaccinees = async (req, res) => {
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
    res.json({
      message: `An error occured - ${error}`
    })
  }
}

const createVaccinee = async (req, res) => {
  try {
    const body = req.body;

    await create(body, (error, result) => {
      if (error) {
        return res.json({
          message: error
        })
      }
      return res.json(result);
    })
  }
  catch(error) {
    res.json({
      message: `An error occured - ${error}`
    })
  }
}

const updateVaccinee = async (req, res) => {
  try {
    const body = req.body;

    await update(body, (error, result) => {
      if (error) {
        res.json({
          message: error
        })
      }
      res.json(result);
    })
  }
  catch(error) {
    res.json({
      message: `An error occured - ${error}`
    })
  }
}

const removeVaccinee = async (req, res) => {
  try {
    const vaccineeId = req.params.vaccineeId;
    await remove(vaccineeId, (error, result) => {
      if (error) {
        res.json({
          message: error
        })
      }
      res.json(result);
    })
  }
  catch(error) {
    
  }
}

module.exports.listVaccinees = listVaccinees;
module.exports.createVaccinee = createVaccinee;
module.exports.updateVaccinee = updateVaccinee;
module.exports.removeVaccinee = removeVaccinee;