const express = require('express');
const router = express.Router();

const {getEvents,addEvent,deleteEvent ,updateEvent ,searchEvent} = require('../controller/event');

router.route('/').get(getEvents)
router.route('/add').post(addEvent)
router.route('/delete/:id').delete(deleteEvent)
router.route('/update/:id').put(updateEvent)
 router.route('/search').get(searchEvent)

module.exports = router;