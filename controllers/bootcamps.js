// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, message: 'show all bootcamps'})
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: 'get a single bootcamp'})
}

// @desc    Create  bootcamp
// @route   Post /api/v1/bootcamps/
// @access  private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: 'create a bootcamps'})
}

// @desc    Update  bootcamp
// @route   Put /api/v1/bootcamps/
// @access  private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: 'update a single bootcamp'})
}


// @desc    Delete  bootcamp
// @route   Delete /api/v1/bootcamps/
// @access  private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: 'delete a single bootcamp'})
}