const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
// const mailUtil = require("../utils/mailUtil")
const jwt = require("jsonwebtoken")
// const secret = "secret"








const loginUser = async(req,res) => {

    // here both email and password coming from front ens is stored in wmail and password
    const email = req.body.email
    const password = req.body.password
    console.log(email,password)
    // Matched email coming from frontend with stored email in database with findOne method 
    const foundUserFromEmail = await userModel.findOne({email:email})

    console.log(foundUserFromEmail);

    //Now if we had found email from database then compare password

    if (foundUserFromEmail != null) {
        const isMatched = bcrypt.compareSync(req.body.password, foundUserFromEmail.password)
        // 
        console.log("imsatcjed..",isMatched)
        if (isMatched == true) {
            res.status(200).json({
              message: "login success",
              data: foundUserFromEmail,
            });
          } else {
            res.status(404).json({
              message: "invalid cred..",
            });
          }
    }else{
        res.status(401).json({
            message:"Email not found"
        })
    }
    




}





const signUp = async (req,res) => {
    try {
        

        // Password encyption
        // Generates a salt (a random string) with a cost factor of 10.
        //The higher the cost factor, the more secure but slower the hashing process.
        const salt = bcrypt.genSaltSync(10)

        // Hashes the user's password (req.body.password) using the generated salt.
        // The hashSync method ensures that the operation is performed synchronously.
        // The result (hashedPassword) is a securely hashed version of the password, which can be safely stored in a database.
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        // Here we are storing hashed password into body so that encrypted password is stored into database


        req.body.password = hashedPassword;

        console.log(req.body);
        

        const createdUser = await userModel.create(req.body)
        // const userRoleName = addedUser.data.roleId.name
        console.log(createdUser);

       
        res.json({
            message:"User Signup to db succesfully",
            data:createdUser

        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            data:error
        })
    }
}

const getUser = async (req,res) => {
    try {
        const allUserFetched = await userModel.find()

    res.status(201).json({
        message:"All user fetched...",
        data:allUserFetched
    })
    } catch (error) {

        res.status(401).json({
            message:"error",
            data:error
        })
        
    }
}

const deleteUser = async (req,res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.userId)

    res.status(204).json({
        message:"User Data deleted",
        data:deletedUser
    })
}



const getUserById = async (req,res) => {
    const getOneUser = await userModel.findById(req.params.userId)

    res.json({
        message:"user fetched succesfully...",
        data:getOneUser
    })
}

module.exports = {
    signUp,
    getUser,
    deleteUser,
    getUserById,
    loginUser,

}