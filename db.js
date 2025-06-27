const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=>console.log('error in connecting mongoosedb',error.message));
}

module.exports = connectToDb