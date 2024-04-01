// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// UPLOAD PRACTICE PROJECT ASSETS
// FREE ASSETS FROM PIXABAY
////////////////////////////////////////////

// IMAGE 1: https://cdn.pixabay.com/photo/2022/11/07/18/29/bird-7576994_1280.jpg

// IMAGE 2: https://cdn.pixabay.com/photo/2023/07/11/13/03/dachshund-8120554_1280.jpg
