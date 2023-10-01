const Video = require('../models/video.models');
const fileUtils = require('../utils/file.utils');

// Handle video upload
exports.uploadVideo = async (req, res) => {
  try {
    const { file } = req;
    const filePath = await fileUtils.saveFile(file);
    
    const video = new Video({ filePath });
    await video.save();

    res.status(201).json({ message: 'Video uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
