const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const dotenv = require('dotenv');

dotenv.config();

exports.register = (req, res) => {
  const {name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 8);

  db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashPassword], (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error registering user' });
    res.status(201).send({ msg: 'User registered successfully' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).send({ msg: 'Error logging in' });
    if (!result.length || !bcrypt.compareSync(password, result[0].password)) {
      return res.status(401).send({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).send({ token });
  });
};

exports.getUserProfile = (req, res) => {
    const userId = req.user.id;
  
    db.query('SELECT id, email, password, name FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) {
        return res.status(500).send({ msg: 'Error retrieving user profile' });
      }
      res.status(200).send(result[0]);
    });
  };

  exports.searchUsersByName = (req, res) => {
    const { name } = req.query; 
  
    if (!name) {
      return res.status(400).send({ msg: 'Please provide a name to search' });
    }
  
    const query = 'SELECT * FROM users WHERE name LIKE ?';
    db.query(query, [`%${name}%`], (err, results) => {
      if (err) {
        console.error('Error searching for users:', err);
        return res.status(500).send({ msg: 'Error searching for users' });
      }
  
      if (results.length === 0) {
        return res.status(404).send({ msg: 'No users found' });
      }
  
      res.status(200).send(results);
    });
  };