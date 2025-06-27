const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(()=>console.log('error in connecting mongoosedb'))
}

module.exports = connectToDb