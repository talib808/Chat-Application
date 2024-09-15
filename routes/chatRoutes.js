const express = require('express');
const { sendMessage, getMessages, createGroup, sendGroupMessage, getGroupMessages } = require('../controllers/chatController');
const { authenticateJWT } = require('../middleware/authMiddleware');

const router = express.Router();

// Send a message to a user
router.post('/send', authenticateJWT, sendMessage);

// Get messages between two users
router.get('/messages/:userId/:otherUserId', authenticateJWT, getMessages);

// Create a new group
router.post('/group', authenticateJWT, createGroup);

// Send a message to a group
router.post('/group/send', authenticateJWT, sendGroupMessage);

// Get messages from a group
router.get('/group/messages/:groupId', authenticateJWT, getGroupMessages);

module.exports = router;
