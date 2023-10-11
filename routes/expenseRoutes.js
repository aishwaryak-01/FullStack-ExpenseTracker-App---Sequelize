const express = require('express');
const expenseController = require('../controllers/Expense');
const router = express.Router();
router.get('/', expenseController.getExpenses);
router.post('/add-expense', expenseController.addExpenses);
router.get('/edit-expense/:id', expenseController.getEditExpense);
router.post('/edit-expense/:id', expenseController.postEditExpense);
router.get('/delete-expense/:id', expenseController.getDeleteExpense);
module.exports = router;