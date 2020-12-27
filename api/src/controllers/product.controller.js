const productModel = require("../models/product.model");

exports.count = async (req, res) => {

    productModel.count({}, function( err, count){

        res.send({
            data: count
        });
    });
}

exports.getAll = async (req, res) => {

    let page = req.query.page || undefined;
    let perPage = req.query.perPage || 10;

    if (page) {

        page = parseInt(page);
        perPage = parseInt(perPage);

        productModel.find()
            .limit(perPage)
            .skip(perPage * page)
            .sort({
                createdAt: 'asc'
            })
            .exec(function(err, products) {
                res.send(products);
            })
    } else {
        productModel.find({}, function(err, products) {
            res.send(products);
        });
    }
};

exports.create = async (req, res) => {

    console.log(req.body)

    new productModel({
        name: req.body.name,
        price: req.body.price,
    }).save((err) => {

        if (err) {
            console.log(err);
            return;
        } else {
            res.send({
                status: true,
                message: "Success",
            });
        }
    });
};
