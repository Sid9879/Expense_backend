let expenseCollection = require('../models/Expense')

const createExpense = async(req,res)=>{
 const {expenseName,date,price,userId} = req.body;
try {
    let data = await expenseCollection.create({
        expenseName,
        date,
        price,
        userId
     })
     res.json({msg:"expense created successfully",success:true})
} catch (error) {
    res.json({msg:"error in creating expense",success:false,error:error.message })
}
}


const getUserExpense = async (req,res)=>{

    
       let {userId} = req.body
       console.log(userId)
       console.log(req.body)

       try{

        let findUser = await expenseCollection.find({userId});

        if(findUser){
            res.json({msg:"user found",success:true, data:findUser});
        }
else{
    res.json({msg:"user not found",success:false})
}
        
       } catch(error){
res.json({msg:"something went a wrong",success:false,error:error.message})
       }

}

const deleteExpense = async (req,res)=>{
    let userId = req.params._id;
let user = await expenseCollection.findByIdAndDelete(userId)

    res.json({msg:"expense deleted successfully",success:true})

}


const updateExpense = async (req,res)=>{

    const {expenseName,price,date,userId} =req.body
    console.log("req.body=",req.body)

    const _id = req.params._id
    console.log("id=",_id)
try {
 
    let expenseData = await expenseCollection.findByIdAndUpdate(_id,{$set:{expenseName,price,date}},{new:true})
    res.json({msg:"expense updated successfully",success:true,expenseData})
    
} catch (error) {
    res.json({msg:"error in expense updation",success:true,error:error.message})
    
}


    
}

module.exports = {
    createExpense,
    getUserExpense,
    deleteExpense,
    updateExpense
}