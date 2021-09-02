const express = require('express');
const router = express.Router();

const { createVaccinee, updateVaccinee, listVaccinees, removeVaccinee } = require('../controllers/vaccineesController');

router.get('/', listVaccinees);
router.post('/', createVaccinee);
router.patch('/', updateVaccinee);
router.delete('/:vaccineeId', removeVaccinee);

module.exports = router

