const express = require('express');
const router = express.Router();

const {getOrganizer,addOrganizer,updateOrganizer} = require('../controller/organizer');

router.route('/').get(getOrganizer)
router.route('/add').post(addOrganizer)
router.route('/update/:id').put(updateOrganizer)

module.exports = router;