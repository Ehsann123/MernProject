// routes/auth.js

const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { check } = require('express-validator');

// @route   POST api/auth/signup
// @desc    Register a user
// @access  Public
router.post('/signup', [
//   check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], signup);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], login);

module.exports = router;