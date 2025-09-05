const userController = require("../controllers/userController")

const routes = require("express").Router()

routes.post("/user", userController.signUp)

routes.post("/user/login", userController.loginUser)

routes.get("/user", userController.getUser)

routes.delete("/user/:userId", userController.deleteUser)

routes.get('/user/:userId', userController.getUserById)




module.exports = routes
