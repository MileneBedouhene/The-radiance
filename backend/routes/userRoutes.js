const express = require('express');
const { registerUser, authUser} = require('../controllers/userControllers'); // Utilisez la destructuration

const router = express.Router();

router.route('/').post(registerUser).get(allUsers);
router.post('/login', authUser); 


module.exports = router;
