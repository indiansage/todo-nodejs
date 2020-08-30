const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

//Views
router.get('/', (req, res) => res.redirect('/add'));
router.get('/add', homeController.addPage);
router.get('/pending', homeController.pendingPage);
//REST APIs
router.post('/task', homeController.createTask);
router.delete('/task/:id', homeController.deleteTask);
router.put('/task/:id', homeController.updateTask);

module.exports = router;
