import express from 'express';
import  {addIncome, getIncomes , deleteIncome} from '../controllers/Income.controller.js';
import { addExpense, deleteExpense, getExpenses } from '../controllers/Expense.controller.js';

// Create an instance of express router
const router = express.Router();


// router.get('/',(req, res)=>{
//     res.send('Hello there from transaction')
// } )

//addIncome comes from controller
router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expense',addExpense)
        .get('/get-expenses', getExpenses)
        .delete('/delete-expense/:id', deleteExpense)

export default router;