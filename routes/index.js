const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.static('../assets'));
router.get('/', homeController.home);

module.exports = router;
