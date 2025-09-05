const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName:{
        required: true,
        type: String
    },
    
    email:{
        required: true,
        type: String,
        unique: true
    },
   
    password:{
        required: true,
        type: String
    },
    gender:{
        required: true,
        enum: ["male","female","other"],
        type: String
        
    },
    status:{
        type: Boolean,
        default: true,
        
    },
    
   
},{
    timestamps: true
})

module.exports = mongoose.model("user",userSchema);