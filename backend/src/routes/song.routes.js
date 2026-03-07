const {Router} = require("express")
const upload = require("../middlewares/upload.middleware")
const songController = require("../controllers/song.controller")

const songRouter = Router()

songRouter.post("/", upload.single("song"), songController.uploadSong)


module.exports = songRouter