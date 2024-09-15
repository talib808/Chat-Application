const createGroupUsersTable = `
  CREATE TABLE IF NOT EXISTS group_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES groups(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`;

module.exports = createGroupUsersTable;