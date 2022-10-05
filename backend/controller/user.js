const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const getUsers = async (req, res) => {
    res.status(200).json(await User.find())
}

const followEvents = asyncHandler(async (req, res) => {
    const { email , followedEvent } = req.body
    const favItem = await User.findOneAndUpdate({email},{$push:{followedEvents:followedEvent}},{new:true})
          res.status(201).json(favItem)

})

const userbyemail = async (req, res) => {
    const { email } = req.params
    User.findOne({ email:email})
      .populate('followedEvents').exec((err, doc) => {
        if (err) { return console.error(err); }
         res.status(200).json(doc)
    })
}

const addUser = asyncHandler(async (req, res) => {
    const {name,email,image,followedEvents} = req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new Error('User already exist')
    }
    const user = await User.create({
        name,
        email,
        image,
        followedEvents
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            followedEvents: user.followedEvents
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

module.exports = { getUsers, addUser, followEvents ,userbyemail} 