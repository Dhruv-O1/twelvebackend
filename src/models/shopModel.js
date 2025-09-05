const mongoose = require("mongoose");
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:{
        required: true,
        type: String,
        trim: true,
        minlength: 3,
    },
    description:{
        required: true,
        type: String,
    },
    ownerId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},{
    timestamps: true
})


//Join between shop and product

shopSchema.virtual('products',{
    ref: 'Product',
    localField: '_id',
    foreignField: 'shopId'
})

shopSchema.set('toObject',{virtuals:true});
shopSchema.set('toJSON',{virtuals:true});


module.exports = mongoose.model("shop",shopSchema);