const db = require('../config/db');


const createNotification = (userId, message, callback) => {
  db.query('INSERT INTO notifications (user_id, message) VALUES (?, ?)', [userId, message], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};


const markNotificationsAsRead = (notificationIds, callback) => {
  const query = 'UPDATE notifications SET read_status = 1 WHERE id IN (?)';
  db.query(query, [notificationIds], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = { createNotification, markNotificationsAsRead };
