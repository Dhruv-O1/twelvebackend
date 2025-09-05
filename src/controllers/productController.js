const productModel = require('../models/productModel');

//Create Product
const createProduct = async (req, res) => {
    try {
        const { name, description, price, shopId } = req.body;  
        if (!name || !price || !shopId) {
            return res.status(400).json({
                message: "Name, Price, and ShopID fields are required"
            });
        }
        const createdProduct = await productModel.create(req.body);
        res.status(201).json({
            message: "Product created successfully",
            data: createdProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            data: error
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, shopId } = req.body;
        const { id } = req.params;
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({   
                message: "Product not found"
            });
        }   
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;

        const updatedProduct = await product.save();
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            data: error
        });
    }
}

module.exports = {
    createProduct,
    updateProduct
};