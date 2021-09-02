const express = require('express');
const router = express.Router();

const { listVaccines } = require('../controllers/vaccinesController'); 

router.get('/', listVaccines);

module.exports = router;