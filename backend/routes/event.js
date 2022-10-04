const express = require('express');
const router = express.Router();

const {getEvents,addEvent} = require('../controller/event');

router.route('/').get(getEvents)
router.route('/add').post(addEvent)

module.exports = router;