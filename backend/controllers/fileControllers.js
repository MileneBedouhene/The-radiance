const uploadToCloud = require('../config/cloudinary')

async function uploadController(req,res){
    
    const file = req.file
    if (!file){
        res.status(400).json({message: 'you did not send the file'})
        return
    }

    const link = await uploadToCloud(file)
    res.json({link})
    
}

module.exports = uploadController;