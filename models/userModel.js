const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: [3, 'Name must be between 3-20 charachters.'],
    maxlength: [20, 'Name must be between 3-20 charachters.'],
    trim: true,
    required: [true, 'Please enter a first name.'],
  },
  lastName: {
    type: String,
    minlength: [3, 'Name must be between 3-20 charachters.'],
    maxlength: [20, 'Name must be between 3-20 charachters.'],
    trim: true,
    required: [true, 'Please enter a last name.'],
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, 'Invalid email.'],
    lowercase: true,
    required: [true, 'Please enter email.'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password.'],
    minlength: [8, 'Passwrod must be between 8-30 charachters.'],
    maxlength: [30, 'Passwrod must be between 8-30 charachters.'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm password'],
    validate: {
      validator(val) {
        return val === this.password;
      },
      message: "Password doesn't match",
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
