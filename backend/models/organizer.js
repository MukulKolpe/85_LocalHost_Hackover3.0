const mongoose = require('mongoose')

const organizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    image: {
        type: String,
        required: false
    },
    contact:{
        type: String,
        required: [true, 'Please provide a contact number'],
    },
})

module.exports = mongoose.model('Organizer', organizerSchema)
