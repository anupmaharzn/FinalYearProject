const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('./catchAsyncError');
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

exports.isAuthenticatedUser = catchAsyncErrors(
    async (req, res, next) => {

        const { token } = req.cookies;

        if (!token) {
            return next(new ErrorHandler("please login to access this resource", 401));
        }

        const decodedDate = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decodedDate);

        //save all data related to user
        req.user = await User.findById(decodedDate.id);

        next();
    }
);

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403));
        }
        next();
    };

}