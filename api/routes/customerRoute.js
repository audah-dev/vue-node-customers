const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Router
router.get('/', customerController.customer_get_all);
router.get('/:id', customerController.customer_get);
router.post('/', customerController.customer_post);
router.put('/:id', customerController.customer_update);
router.delete('/:id', customerController.customer_delete);

module.exports = router;