const db = require('./config/db'); // Adjust path as necessary
const createUsersTable = require('./models/userModel');
const createMessagesTable = require('./models/messageModel');
const createGroupMessagesTable = require('./models/groupMessagesModel');
const createGroupsTable = require('./models/groupModel');
const createGroupUsersTable = require('./models/groupUserModel');
const createNotificationsTable = require('./models/notificationModel');

const runQuery = (query, description) => {
  db.query(query, (err) => {
    if (err) {
      console.error(`Error creating ${description}:`, err);
    } else {
      console.log(`${description} created.`);
    }
  });
};

// Create tables
runQuery(createUsersTable, 'Users table');
runQuery(createMessagesTable, 'Messages table');
runQuery(createGroupMessagesTable, 'Group Messages table');
runQuery(createGroupsTable, 'Groups table');
runQuery(createGroupUsersTable, 'Group Users table');
runQuery(createNotificationsTable, 'Notifications table');
