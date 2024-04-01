# Cloudinary Partners - Implementation Advanced Practice Project

A small project to practice using Cloudinary.

## Prerequisites

1. A free Cloudinary account
2. Your Cloudinary URL from your dashboard and add your URL to `.env`
3. Register for the free version of the Google Auto-Tagging add-on (settings->add-ons)
4. Review the documentation

   a. [Rename Assets](https://cloudinary.com/documentation/rename_assets)

   b. [Search for Assets](https://cloudinary.com/documentation/searching_for_assets)

   c. [Google Auto-Tagging](https://cloudinary.com/documentation/google_auto_tagging_addon)

## Steps

---

### Upload Challenge

Using the provided images in the `start.js` file, complete the following:

1. Both images should go into a folder called "pe-advanced-practice"
2. Both images should have a publicId - "cld-advanced-bird" & "cld-advanced-dog"
3. Both images should be uploaded with Google Auto-tagging at `0.7`

### Rename Challenge

Using the provided image you uploaded, complete the following:

1. Rename the "cld-advanced-bird" to "green-tropical-bird"
2. Invalidate the cache

### Search Challenge

Using the provided images you uploaded, complete the following search:

1. Search for only images
2. Search for assets w/ "plant" as a tag
3. Sort by publicID descending
4. Only return a max of 2 images
