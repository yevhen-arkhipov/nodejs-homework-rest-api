const Jimp = require('jimp');
const { HttpError } = require('../helpers');

const jimpImageResizer = async (req, res, next) => {
  try {
    const { path: tempUpload } = req.file;
    const image = await Jimp.read(tempUpload);
    await image.resize(250, 250);
    await image.writeAsync(tempUpload);
    next();
  } catch (error) {
    next(HttpError(400, 'missing image'));
  }
};

module.exports = jimpImageResizer;
