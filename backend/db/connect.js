const mongoose = require('mongoose');

const connectDB = (uri) => {
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    },console.log('MongoDB Connected'))
    
}

module.exports = connectDB;