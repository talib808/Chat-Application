const express = require('express');
const { createNotification, getNotifications, markAsRead } = require('../controllers/notificationController');
const { authenticateJWT } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new notification
router.post('/create', authenticateJWT, createNotification);

// Get notifications for a user
router.get('/:userId', authenticateJWT, getNotifications);

// Mark a notification as read
router.post('/mark-as-read', authenticateJWT, markAsRead);

module.exports = router;
