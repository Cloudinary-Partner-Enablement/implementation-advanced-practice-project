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

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2022/11/07/18/29/bird-7576994_1280.jpg",
    {
      public_id: "cld-advanced-bird",
      folder: "pe-advanced-practice",
      categorization: "google_tagging",
      auto_tagging: 0.7,
    }
  )
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2023/07/11/13/03/dachshund-8120554_1280.jpg",
    {
      public_id: "cld-advanced-dog",
      folder: "pe-advanced-practice",
      categorization: "google_tagging",
      auto_tagging: 0.7,
    }
  )
  .then((result) => console.log(result));
