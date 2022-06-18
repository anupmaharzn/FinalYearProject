const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, resetPassword } = require('../controllers/userController');

const router = express.Router();

//register user route
router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/password/forgot', forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get('/logout', logout);

module.exports = router;