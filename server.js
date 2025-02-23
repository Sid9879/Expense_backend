const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')

const connection = require('./db')
connection()

const userRouter = require("./router/userRoutes")
const expenseRouter = require('./router/expenseRouter')

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use("/api/users",userRouter)
app.use("/api/expense",expenseRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})