const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    image: {
        type: String,
        required: false
    },
    isOrganizer:{
        type: Boolean,
        default: false
    },
    followedEvents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Event',
        default: [],
    }],
})

module.exports = mongoose.model('User', userSchema)