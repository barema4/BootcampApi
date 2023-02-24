const fs = require('fs')
const dotenv = require('dotenv');
const mongoose = require('mongoose')


//load env vars
dotenv.config({path: './config/config.env'});

//load the models

const Bootcamps = require('./models/Bootcamp')

// connect to the database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: false
});

// Read the file
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
)

// Import data into db
const importData = async() => {
    try {
        await Bootcamps.create(bootcamps)
        process.exit()
        
    } catch (err) {
        console.error(err)
    }
}

// Delete data

const deleteData = async() => {
    try {
        await Bootcamps.deleteMany()
        process.exit()
        
    } catch (err) {
        console.error(err)
    }
}

if(process.argv[2] === '-i'){
    importData()
} else if(process.argv[2] === '-d'){
    deleteData()
}