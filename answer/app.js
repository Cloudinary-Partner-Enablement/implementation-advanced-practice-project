// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Rename Challenge
cloudinary.uploader
  .rename(
    "pe-advanced-practice/cld-advanced-bird",
    "pe-advanced-practice/green-tropical-bird",
    { invalidate: true }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Search Challenge
cloudinary.search
  .expression("resource_type:image AND tags=plant")
  .sort_by("public_id", "desc")
  .max_results(2)
  .execute()
  .then((result) => console.log(result));
