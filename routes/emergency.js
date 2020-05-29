'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const emergencyRouter = new Router();

emergencyRouter.get('/emergency', (req, res) => {
  res.render('/emergency');
});

module.exports = emergencyRouter;
