# Chat Application
```
This is a real-time chat application built Node.js (Express) with Socket.io on the backend. It allows person-to-person and group chats, supports authentication and authorization, stores messages in MySQL, and notifies users of new messages with notifications and search features.
```
## Features

1. **Person-to-Person Chat**: Users can send real-time messages to other users using Socket.io.
2. **Group Chat**: Users can create groups and send messages in group chats.
3. **Authentication & Authorization**: Secure login and authentication using email or mobile number with JWT.
4. **Database**: MySQL/Postgres used to store user details, messages, groups, and notifications.
5. **Notifications**: Notification system for new messages with an alert ringtone.
6. **Search**: Users can search for other users by name.


### `/controllers`

- **authController.js**: 
  Handles user login, registration, and JWT token generation.
  
- **chatController.js**: 
  - `sendMessage`: Handles sending direct messages.
  - `getMessages`: Fetches person-to-person message history.
  - `createGroup`: Allows creating a group and adding users to the group.
  - `sendGroupMessage`: Handles sending messages in a group chat.
  - `getGroupMessages`: Fetches message history for a group.

- **notificationController.js**:
  Handles sending and managing notifications for new messages.

### `/middleware`

- **authMiddleware.js**:
  Middleware to authenticate JWT tokens. It checks if a valid token is sent in the request headers and decodes the token to retrieve the user information.

### `/models`

- **users.js**:
  Defines the schema for the `users` table (stores user information such as email, password, and name).

- **messages.js**:
  Defines the schema for the `messages` table (stores person-to-person messages).

- **groups.js**:
  Defines the schema for the `groups` and `group_users` tables. `groups` stores the group information, and `group_users` manages the users in the groups.

- **notifications.js**:
  Stores notification data to alert users about new messages.

### `/routes`

- **authRoutes.js**:
  - `POST /register`: Registers a new user.
  - `POST /login`: Logs in an existing user.

- **chatRoutes.js**:
  - `POST /send`: Sends a person-to-person message.
  - `GET /messages/:userId/:otherUserId`: Fetches the chat history between two users.
  - `POST /group/create`: Creates a group and adds users.
  - `POST /group/send`: Sends a message to a group.
  - `GET /group/messages/:groupId`: Fetches the message history of a group.

- **notificationRoutes.js**:
  - `GET /notifications`: Fetches unread notifications for the user.
  - `PUT /notifications/mark-read`: Marks all notifications as read.

### `/sockets`

- **socket.js**:
  Handles real-time messaging using Socket.io for both person-to-person and group chats.

### `/utils`

- **jwtUtils.js**:
  - `generateToken(user)`: Generates a JWT token for a user after successful login.
  - `verifyToken(token)`: Verifies a JWT token to authenticate a user.

- **notificationUtils.js**:
  Helper functions for managing and sending notifications.

## Server (server.js)

The main entry point of the backend, where the Express server and Socket.io server are initialized.

- **Express.js**: Used for handling REST APIs (authentication, chat, notifications).
- **Socket.io**: Handles real-time communication for person-to-person and group chats.

## API Endpoints
- Authentication
- Register User

## URL: http://localhost:5000

- POST /api/auth/register

```
Body

{
  "name": "name",
  "email": "user@example.com",
  "password": "password123",
}
```
- Login User
```
URL: POST /api/auth/login

{
  "email": "user@example.com",
  "password": "password123"
}
```

- Person-to-Person Messaging
- Send Message

- URL: POST /api/chat/send
```
{
  "senderId": 1,
  "receiverId": 2,
  "message": "Hello!"
}
```
- Get Messages

- URL: GET /api/chat/messages/:userId/:otherUserId

- Group Messaging

- Create Group

URL: POST /api/chat/group/create
```
{
  "groupName": "Friends",
  "userIds": [1, 2, 3]
}
```
- Send Group Message
```
- URL: POST /api/chat/group/send

{
  "groupId": 1,
  "senderId": 1,
  "message": "Hello Group!"
}
```
- Get Group Messages

- URL: GET /api/chat/group/messages/:groupId
- Notifications
- Get Notifications

- URL: GET /api/notifications
- Mark Notifications as Read

- URL: PUT /api/notifications/mark-read
### How to Test

## Start the Server:
 - Run  server.js to start the backend.
- The server should be accessible at http://localhost:5000.
- Test Authentication:
- Use Postman to test POST /api/auth/register and POST /api/auth/login endpoints.
- Test Chat APIs:
-Test direct and group chat functionalities by using Postman to send messages and retrieve chat history.
- Check Notifications:
- Check notifications by making requests to the GET /api/notifications endpoint.

Setup Instructions


- Install dependencies using:
```
npm install
```
- Setup a MySQL database.
- Create a .env file with the following variables:
```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```
- Run the server using:
```
npm start
```
