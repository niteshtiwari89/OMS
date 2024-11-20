const express = require('express');
const router = express.Router();
const { registerUser, loginUser,getUser } = require('../controllers/userController');

// POST /signup - Register a new user
router.post('/signup', registerUser);

router.get('/', getUser);
// POST /login - Login user
router.post('/login', loginUser);

module.exports = router;
