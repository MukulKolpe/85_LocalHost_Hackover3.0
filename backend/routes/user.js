const express = require('express');
const router = express.Router();

const {getUsers,addUser,followEvents , userbyemail} = require('../controller/user');

router.route('/').get(getUsers)
router.route('/add').post(addUser)
router.route('/follow').put(followEvents)
router.route('/:email').get(userbyemail)
module.exports = router;