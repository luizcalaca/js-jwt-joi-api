const express = require('express');
const userController = require('../controllers/userController');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/', userController.create);
router.post('/auth', userController.login);
router.get('/', authorize, userController.listAllUsers);

module.exports = router;