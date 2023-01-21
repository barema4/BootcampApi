const NodeGeocorder = require('node-geocoder');

const options = {
    provider:process.env.GEOCORDER_PROVIDER,
    httpAdapter:'https',
    apiKey: process.env.GEOCORDER_API_KEY

}

const geocoder = NodeGeocorder(options)

module.exports = geocoder