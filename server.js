const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const errorHandlers = require('./middleware/error')
const connectDB = require('./config/db')


// load env vars
dotenv.config({path: './config/config.env'})

// connect to database

connectDB()

// Routes files

const bootcamps = require('./routes/bootcamps')

const app = express()

app.use(express.json())


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Mount the routes
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandlers)

const PORT = process.env.PORT || 3000;
console.log('PORT', PORT)

const server = app.listen(PORT, console.log(`server runing on ${PORT}`))

// handle unhandled promise rejections

process.on('unhandledRejections', (error, promise) => {
    console.log(`Error: ${error.message}`);
    // Close server & exit process
    server.close(() => process.exit(1))
})
