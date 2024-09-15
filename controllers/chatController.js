const db = require('../config/db');

exports.sendMessage = (req, res) => {
  const { senderId, receiverId, message } = req.body;

  db.query('INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)', 
    [senderId, receiverId, message], (err, result) => {
    if (err) {
      return res.status(500).send({ msg: 'Error sending message' });
    }
    res.status(201).send({ msg: 'Message sent successfully' });
  });
};

exports.getMessages = (req, res) => {
  const { userId, otherUserId } = req.params;

  db.query(
    'SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)', 
    [userId, otherUserId, otherUserId, userId], 
    (err, results) => {
      if (err) {
        return res.status(500).send({ msg: 'Error retrieving messages' });
      }
      res.status(200).send(results);
    }
  );
};

exports.createGroup = (req, res) => {
  const { groupName, userIds } = req.body;

  db.query('INSERT INTO groups (name) VALUES (?)', [groupName], (err, result) => {
    if (err) {
      return res.status(500).send({ msg: 'Error creating group' });
    }

    const groupId = result.insertId;
    const values = userIds.map(userId => [groupId, userId]);

    db.query('INSERT INTO group_users (group_id, user_id) VALUES ?', [values], (err) => {
      if (err) {
        return res.status(500).send({ msg: 'Error adding users to group' });
      }
      res.status(201).send({ msg: 'Group created and users added' });
    });
  });
};

exports.sendGroupMessage = (req, res) => {
  const { groupId, senderId, message } = req.body;

  db.query('INSERT INTO group_messages (group_id, sender_id, message) VALUES (?, ?, ?)', 
    [groupId, senderId, message], (err) => {
    if (err) {
      return res.status(500).send({ msg: 'Error sending group message' });
    }
    res.status(201).send({ msg: 'Group message sent successfully' });
  });
};

exports.getGroupMessages = (req, res) => {
  const { groupId } = req.params;

  db.query('SELECT * FROM group_messages WHERE group_id = ?', [groupId], (err, results) => {
    if (err) {
      return res.status(500).send({ msg: 'Error retrieving group messages' });
    }
    res.status(200).send(results);
  });
};

  