const bootcamps = require('../models/Bootcamp')


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = async (req, res, next) => {
   try {
        const allBootCamps = await bootcamps.find()
        res.status(200).json({
            success: true,
            data: allBootCamps
        })
        
   } catch (error) {
    res.status(400).json({success: false})
    
   }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = async(req, res, next) => {
    try {
        const singleBootCamp = await bootcamps.findById(req.params.id)
        if(!singleBootCamp){
            res.status(200).json({success: false})
        }
        res.status(200).json({success: true, data: singleBootCamp})

        
    } catch (error) {

        res.status(400).json({success: false})
        
    }
}

// @desc    Create  bootcamp
// @route   Post /api/v1/bootcamps/
// @access  private
exports.createBootcamp = async(req, res, next) => {
    try {
        const bootcamp =  await bootcamps.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        })
        
    } catch (error) {
        res.status(400).json({success: false})
        
    }
  
}

// @desc    Update  bootcamp
// @route   Put /api/v1/bootcamps/
// @access  private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const updateBootCamp = await bootcamps.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if(!updateBootCamp){
            res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: updateBootCamp})
    } catch (error) {
        res.status(400).json({success: false})  
    }
    
    
}


// @desc    Delete  bootcamp
// @route   Delete /api/v1/bootcamps/
// @access  private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await bootcamps.findOneAndDelete(req.params.id);
        if(!bootcamp){
            res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: {}})
    } catch (error) {
        res.status(400).json({success: false})  
    }
}