const cloudinary = require("cloudinary").v2;
const config = require("../config/dev");
cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET,
  secure: true,
});

module.exports = cloudinary;
