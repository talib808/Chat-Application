const express = require('express');
const { register, login, getUserProfile } = require('../controllers/authController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const { searchUsersByName } = require('../controllers/authController');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login an existing user
router.post('/login', login);

// Get the user profile (protected route)
router.get('/profile', authenticateJWT, getUserProfile);


router.get('/search', searchUsersByName);

module.exports = router;
