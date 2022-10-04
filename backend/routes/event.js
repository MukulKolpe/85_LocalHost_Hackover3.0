const express = require('express');
const router = express.Router();

const {getEvents,addEvent,deleteEvent ,updateEvent} = require('../controller/event');

router.route('/').get(getEvents)
router.route('/add').post(addEvent)
router.route('/delete/:id').delete(deleteEvent)
router.route('/update/:id').put(updateEvent)

module.exports = router;