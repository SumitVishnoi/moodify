const id3 = require("node-id3")



async function uploadSong(req, res) {
    console.log(req.file)

    const tags = id3.read(req.file.buffer)

    console.log("details", tags)

    
}

module.exports = {
    uploadSong
}