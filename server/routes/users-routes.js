let express = require('express');
let router = express.Router();

let userController = require('../controllers/users-controller');

router.route('/').get(userController.getAllUsers);

module.exports = router;
