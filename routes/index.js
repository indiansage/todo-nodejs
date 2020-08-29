const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', (req, res) => res.redirect('/addPage'));
router.get('/addPage', homeController.addPage);
router.get('/pendingPage', homeController.pendingPage);
router.post('/task', homeController.addNewTask);
router.delete('/task/:id', homeController.deleteTask);

module.exports = router;
