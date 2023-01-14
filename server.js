const express = require('express');
const dotenv = require('dotenv');


// load env vars
dotenv.config({path: './config/config.env'})

const app = express()
app.get('/', (req, res) => {
    res.send('welcome from express')
})

const PORT = process.env.PORT || 3000;
console.log('PORT', PORT)

app.listen(PORT, console.log(`server runing on ${PORT}`))
