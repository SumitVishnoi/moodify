const express = require("express")
const cookieParser = require("cookie-parser")
const router = require("../src/routes/auth.routes")
const cors = require("cors")
const songRouter = require("./routes/song.routes")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", router)
app.use("/api/songs", songRouter)

module.exports = app