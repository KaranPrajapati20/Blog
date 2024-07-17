const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, path.join(__dirname, "../Public/")); // Adjust the destination folder path as needed
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

module.exports = { upload };




