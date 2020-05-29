'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  id: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
  },
  passwordHash: {
    type: String
  }
});

module.exports = mongoose.model('Patient', schema);
