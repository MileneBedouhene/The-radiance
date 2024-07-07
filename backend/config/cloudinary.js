const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises')


cloudinary.config({
  cloud_name: 'dqgzemvzv',
  api_key: '646415273922441',
  api_secret: 'XwIjqjbQpcXQUbEiUvEZqD8fcgY'
});


async function uploadToCloud(file){
    const cloudFile= await cloudinary.uploader.upload(file.path, {resource_type:'image'})
    await fs.unlink(file.path)
    return cloudFile.secure_url

}
module.exports = uploadToCloud;

