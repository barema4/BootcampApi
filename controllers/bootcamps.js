const bootcamps = require('../models/Bootcamp')
const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
   
        const allBootCamps = await bootcamps.find()
        res.status(200).json({
            success: true,
            data: allBootCamps
        })
})

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = asyncHandler(async(req, res, next) => {
    
        const singleBootCamp = await bootcamps.findById(req.params.id)
        if(!singleBootCamp){
           return new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        }
        res.status(200).json({success: true, data: singleBootCamp})
})

// @desc    Create  bootcamp
// @route   Post /api/v1/bootcamps/
// @access  private
exports.createBootcamp = asyncHandler(async(req, res, next) => {
    
        const bootcamp =  await bootcamps.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        })
})

// @desc    Update  bootcamp
// @route   Put /api/v1/bootcamps/
// @access  private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
        const updateBootCamp = await bootcamps.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if(!updateBootCamp){
            return new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        }
        res.status(200).json({success: true, data: updateBootCamp}) 
})


// @desc    Delete  bootcamp
// @route   Delete /api/v1/bootcamps/
// @access  private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    
        const deletbootcamp = await bootcamps.findByIdAndDelete(req.params.id);
        if(!deletbootcamp){
            return new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        }
        res.status(200).json({success: true, data: {}})
})


// @desc    Get bootcamps with the radius
// @route   Get /api/v1/bootcamps/radius/:zicode/:distance
// @access  private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    
   
})