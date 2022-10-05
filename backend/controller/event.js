const Event = require('../models/events');
const asyncHandler = require('express-async-handler');

const getEvents = async (req, res) => {
    res.status(200).json(await Event.find())
  }

  const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    if (event) {
        await event.remove()
        res.json({ message: 'Event removed' })
    } else {
        res.status(404)
        throw new Error('Event not found')
    }
    })

const updateEvent = asyncHandler(async (req, res) => {
    const { title, description, image, date, time,mode ,location,price,tags} = req.body
    const event = await Event.findById(req.params.id)
    if (event) {
        event.title = title
        event.description = description
        event.image = image
        event.date = date
        event.time = time
        event.mode = mode
        event.location = location
        event.price = price
        event.tags = tags
        const updatedEvent = await event.save()
        res.json({
            _id: updatedEvent._id,
            title: updatedEvent.title,
            description: updatedEvent.description,
            image: updatedEvent.image,
            date: updatedEvent.date,
            time: updatedEvent.time,
            mode: updatedEvent.mode,
            location: updatedEvent.location,
            price: updatedEvent.price,
            tags: updatedEvent.tags
        })
    } else {
        res.status(404)
        throw new Error('Event not found')
    }
})

const searchEvent = async (req, res) => {
    let searchData = await Event.find({"$and":[{mode:{"$regex":req.query.mode,"$options":"i"}},{tags:req.query.tags}]}) 
    res.status(200).send(searchData)
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

module.exports = {getEvents,addEvent,deleteEvent ,updateEvent , searchEvent}