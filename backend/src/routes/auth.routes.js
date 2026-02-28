const {Router} = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")


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

/**
 * @route GET /api/auth/get-me
 * @description get the logged in user
 * @access Private
 */
router.get("/get-me", authMiddleware.authUser, authController.getMe)

/**
 * @route GET /api/auth/logout
 * @description current user logout
 */
router.get("/logout", authController.logoutUser)

module.exports = router