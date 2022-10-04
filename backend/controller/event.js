const Event = require('../models/events');
const asyncHandler = require('express-async-handler');

const getEvents = async (req, res) => {
    res.status(200).json(await Event.find())
  }

const addEvent = asyncHandler(async (req, res) => {
    const {title,description,time,date,image,mode,location,price,tags} = req.body;
    const event = await Event.create({
        title,
        description,
        time,
        date,
        image,
        mode,
        location,
        price,
        tags
    })
    if(event){
        res.status(201).json({
            _id: event._id,
            title: event.title,
            description: event.description,
            time: event.time,
            date: event.date,
            image: event.image,
            mode: event.mode,
            location: event.location,
            price: event.price,
            tags: event.tags
        })
    } else {
        res.status(400);
        throw new Error('Event not created');
    }
})

module.exports = {getEvents,addEvent}