const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware')
const uploadController = require('../controllers/fileControllers')
const asyncHandler = require("express-async-handler");


const router = express.Router();

router.post('/upload', uploadMiddleware.single('file'),asyncHandler(uploadController)); 

module.exports = router;
