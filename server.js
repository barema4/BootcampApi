const express = require('express');
const dotenv = require('dotenv');

// Routes files

const bootcamps = require('./routes/bootcamps')

// load env vars
dotenv.config({path: './config/config.env'})

const app = express()

//Mount the routes
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 3000;
console.log('PORT', PORT)

app.listen(PORT, console.log(`server runing on ${PORT}`))
