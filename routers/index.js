// importing express module 
const express = require('express');

// setup express router 
const router = express.Router();

//controller for routing
const homeController = require('../controllers/home_controller');


//check whether router is loaded or not
console.log('Router is Loaded');

router.get('/' , homeController.home);
router.use('/users' , require('./users'));

module.exports = router;