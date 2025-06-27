const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = ()=>{
    mongoose.connect(process.env.API_KEY)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(()=>console.log('error in connecting mongoosedb'))
}

module.exports = connectToDb