const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', (req, res) => res.redirect('/add'));
router.get('/add', homeController.addPage);
router.post('/add', homeController.addNew);
router.get('/pending', homeController.pending);

module.exports = router;
