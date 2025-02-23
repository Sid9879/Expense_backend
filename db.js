const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.API_KEY}:${process.env.API_SECRET}@expense.b3w5z.mongodb.net/`)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(()=>console.log('error in connecting mongoosedb'))
}

module.exports = connectToDb