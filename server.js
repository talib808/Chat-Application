const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const socketHandler = require('./sockets/socket');

dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/notifications', notificationRoutes);

const server = http.createServer(app);
const io = socketIo(server);

socketHandler(io);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
