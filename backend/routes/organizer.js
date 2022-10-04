const express = require('express');
const router = express.Router();

const {getOrganizer,addOrganizer} = require('../controller/organizer');

router.route('/').get(getOrganizer)
router.route('/add').post(addOrganizer)

module.exports = router;