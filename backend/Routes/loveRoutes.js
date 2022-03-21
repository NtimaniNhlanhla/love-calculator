const express = require('express');
const router = express.Router();
const {loveCalc}  = require('../controller/loveController')


router.post('/', loveCalc);

module.exports = router;