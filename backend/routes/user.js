const express = require('express');
const router = express.Router();

const {getUsers,addUser} = require('../controller/user');

router.route('/').get(getUsers)
router.route('/add').post(addUser)

module.exports = router;