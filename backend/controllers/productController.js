const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


//create Product --- admin
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {
        // hamle jaba product create hunxa taba kasle create gayeko ho tesko id
        // req.body.user maa rakhlyeko yo line of code thru
        //not by body jasma user le front bata value send garytheyo
        req.body.user = req.user.id;

        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            product
        });
    }
);

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    //product per page for paginaiton 
    const resultPerPage = 10;

    //for dashboard frontend
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productCount,
    });
}
);

//Get Single product --detail maa kaam auxa

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('product not found', 404))

    }
    res.status(200).json({
        success: true,
        product
    })
}
);

//Update Product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("product not found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    res.status(200).json({
        success: true,
        product
    })
}
);

//Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product delete sucessfully"
    })
}
);