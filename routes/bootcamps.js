const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'show all bootcamps'})
})

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, message: 'get a single bootcamp'})
})

router.post('/', (req, res) => {
    res.status(200).json({success: true, message: 'create a bootcamps'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, message: 'update a single bootcamp'})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, message: 'delete a single bootcamp'})
})

module.exports = router