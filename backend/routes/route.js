const router = require('express').Router();

const { signup, getcontact } = require('../controller/appController.js');

/** HTTP Requests */
router.post('/user/signup', signup);
router.post('/user/getcontact', getcontact);

module.exports = router;