const db = require('../config/db');

exports.createNotification = (req, res) => {
  const { userId, message } = req.body;

  db.query('INSERT INTO notifications (user_id, message) VALUES (?, ?)', [userId, message], (err, result) => {
    if (err) {
      return res.status(500).send({ msg: 'Error creating notification' });
    }
    res.status(201).send({ msg: 'Notification created successfully' });
  });
};

exports.getNotifications = (req, res) => {
  const { userId } = req.params;

  db.query('SELECT * FROM notifications WHERE user_id = ? ORDER BY timestamp DESC', [userId], (err, results) => {
    if (err) {
      return res.status(500).send({ msg: 'Error retrieving notifications' });
    }
    res.status(200).send(results);
  });
};

exports.markAsRead = (req, res) => {
  const { notificationId } = req.body;

  db.query('UPDATE notifications SET read_status = 1 WHERE id = ?', [notificationId], (err) => {
    if (err) {
      return res.status(500).send({ msg: 'Error marking notification as read' });
    }
    res.status(200).send({ msg: 'Notification marked as read' });
  });
};
