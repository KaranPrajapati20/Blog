const { v2: cloudinary } = require("cloudinary");
const fs = require('fs');

cloudinary.config({ 
  cloud_name: "dg5824kbh", 
  api_key: "467543792529812", 
  api_secret: "BBx1xLi0bQ6tP_epa3WZdPwueto" 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    fs.unlinkSync(localFilePath); // Delete local file after upload

    return response.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete local file in case of error
    console.error("Error uploading to Cloudinary:", error);
    throw error; // Re-throw the error to handle it in the controller
  }
};

module.exports = { uploadOnCloudinary };
