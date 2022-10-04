require('dotenv').config();
var cors = require('cors');
const express = require('express');
const app = express();

//middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//db
const connectDB = require('./db/connect')

//routes
const organizerRoutes = require('./routes/organizer')
const eventRoutes = require('./routes/event')


app.use(express.json());
app.use(cors())
app.get('/api', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })

app.use('/api/organizers',organizerRoutes)
app.use('/api/events',eventRoutes)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try{
       await connectDB(process.env.MONGODB_URI)
      app.listen(port , console.log(`Server started at port ${port}`))
    } catch(err) {
        console.log(err)
    }
}

start();

