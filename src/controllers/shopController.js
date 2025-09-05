const shopModel = require("../models/shopModel");

const createShop = async (req,res) => {
    try {
        const {name,description,ownerId} = req.body;
        if(!name || !ownerId){
            return res.status(400).json({
                message: "Name and OwnerID fields are required"
            })
        }
        const createdShop = await shopModel.create(req.body);
        res.status(201).json({
            message: "Shop created successfully",
            data: createdShop
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating shop",
            data: error
        });
    }   
}

const updateShop = async (req,res) => {
    try {
        const {name,description,ownerId} = req.body;
        const {id} = req.params;
       const shop = await shopModel.findById(id);
         if(!shop){
            return res.status(404).json({
                message: "Shop not found"
            })
         }
         // Check if the ownerId matches the shop's ownerId
         if (shop.ownerId.toString() !== ownerId) {
            return res.status(403).json({
                message: "You are not authorized to update this shop"
            });
        }
        shop.name = name || shop.name;
        shop.description = description || shop.description;
        const updatedShop = await shop.save();
        res.status(200).json({
            message: "Shop updated successfully",
            data: updatedShop
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating shop",
            data: error
        });
    }
         }


const getallShopWithProduct = async (req,res) => {
    try {
        const allShopFetched = await shopModel.find().populate('products').lean();
        console.log(allShopFetched);
        res.json({
            message: "All shops fetched successfully with products",
            data: allShopFetched
        });
        
    } catch (error) {
        
    }
}

const getShopById = async (req,res) => {
    const getOneShop = await shopModel.findById(req.params.shopId).lean();
    res.json({
        message:"shop fetched succesfully...",
        data:getOneShop
    })
}   

module.exports = {
    createShop,
    getallShopWithProduct,
    updateShop,
    getShopById
}