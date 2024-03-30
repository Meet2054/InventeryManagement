const express = require('express');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const router = express.Router();
// const middleware = require("../middleware/auth");
const { User , Person , Stock } = require("../db");
const jwt = require('jsonwebtoken');

router.get('/persons',authenticateJwt , async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/stocks', authenticateJwt, async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(403).json({ message: 'User already exists' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
