'use strict';

const { Router } = require('express');

const appointmentRouter = new Router();

appointmentRouter.get('/patient', (req, res, next) => {
  console.log('patient user');
});

appointmentRouter.get('/patient/new/', (req, res, next) => {
  console.log('new');
});

appointmentRouter.get('/patient/new/symptoms', (req, res, next) => {
  console.log('symptoms');
});

appointmentRouter.get('/patient/new/symptoms/pain', (req, res, next) => {
  console.log('pain');
});

appointmentRouter.get('/patient/new/symptoms/pain/pain', (req, res, next) => {
  console.log('pain');
});

appointmentRouter.get('/patient/new/symptoms/pain/scale', (req, res, next) => {
  res.redirect('/appointment/patient/new/symptoms');
});



module.exports = appointmentRouter;
