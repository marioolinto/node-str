'use stricts';

const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer-controller');

router.get('/', customerController.get);
router.post('/', customerController.post);

module.exports = router;