const {Router} = require("express")
const authController = require("../controllers/auth.controller")


const router = Router()

/**
 * @route POST /api/auth/register
 * @description create a new user
 */
router.post("/register", authController.registerUser)

/**
 * @route POST /api/auth/login
 * @description login a user
 */
router.post("/login", authController.loginUser)

module.exports = router