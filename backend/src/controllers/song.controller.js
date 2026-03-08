const id3 = require("node-id3");
const storageService = require("../services/storage.service");
const songModel = require("../models/song.model");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);

  const { mood } = req.body;

  const [songFile, posterFile] =
    await Promise.all([
      storageService.uploadFile({
        buffer: songBuffer,
        fileName: tags.title + ".mp3",
        folder: "/moodify/songs",
      }),
      storageService.uploadFile({
        buffer: tags.image.imageBuffer,
        fileName: tags.title + ".jpeg",
        folder: "/moodify/posters",
      })
    ]);

    console.log("songUrl",songFile.url)
    console.log("posterUrl", posterFile.url)

  const song = await songModel.create({
    url: songFile.url,
    posterUrl: posterFile.url,
    title: tags.title,
    mood,
  });

  res.status(201).json({
    message: "Song uploaded successfully",
    song,
  });
}

async function getSong(req, res) {
    const {mood} = req.query
    const song = await songModel.findOne({
        mood
    })

    res.status(200).json({
        message: "Songs fetched successfully",
        song
    })
}

module.exports = {
  uploadSong,
  getSong
};
