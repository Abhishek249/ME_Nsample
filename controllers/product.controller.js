const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send("Greetings from the Test controller");
}

exports.getProducts = function (req, res) {
    Product.find({}, function (err, products) {

        if (err) {
            next();
            return;
        }
        if (products.length == 0) {
            res.send("No products found");
        }
        res.send(products);
    });
}
exports.product_create = function (req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function (err) {
        if (err) {
            next();
            return;
        }
        res.send('Product created successfully');

    })
}

exports.product_details = function (req, res, next) {
    console.log("going here for /allproducts in detail");
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            next();
            return;
        }
        res.send(product);
    });
}

exports.product_update = function (req, res, next) {
    console.log("going here for /allproducts in update");
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, function (err, product) {
        if (err) {
            next();
            return;
        }
        res.send("Product updated successfully");

    });
}

exports.product_delete = function (req, res, next) {
    console.log("going here for /allproducts in delete");
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            next();
            return;
        }
        res.send("Proudct deleted successfully");
    })
}

exports.product_showError = function (req, res) {
    res.send("error in route or any error!");
}