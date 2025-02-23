const express = require("express");
// const { createUser } = require("../Controller/userController");
const { getUserExpense, deleteExpense, updateExpense, createExpense } = require("../Controller/expenseController");

const router = express.Router();

router.post('/create',createExpense);
router.post('/getexpense',getUserExpense);
router.delete('/delete/:_id',deleteExpense);
router.put('/update/:_id',updateExpense);

module.exports = router;