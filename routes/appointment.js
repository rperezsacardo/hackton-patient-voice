'use strict';

const { Router } = require('express');
const routeGuard = require('./../middleware/route-guard');
const appointmentRouter = new Router();

appointmentRouter.get('/patient', routeGuard, (req, res, next) => {
  res.render('patient-info');
});

appointmentRouter.get('/patient/new/', routeGuard, (req, res, next) => {
  res.render('error');
});

appointmentRouter.get('/patient/new/parameters', routeGuard, (req, res, next) => {
  res.render('parameters');
});

appointmentRouter.get('/patient/new/parameters/pain', routeGuard, (req, res, next) => {
  res.render('body-parts');
});

appointmentRouter.get('/patient/new/parameters/pain/body/scale/', routeGuard, (req, res, next) => {
  res.render('pain-scale');
});

appointmentRouter.get(
  '/patient/new/parameters/pain/body/scale/test',
  routeGuard,
  (req, res, next) => {
    res.render('pain-scale-test');
  }
);

appointmentRouter.post(
  '/patient/new/parameters/pain/body/scale/test',
  routeGuard,
  (req, res, next) => {
    res.redirect('/appointment/patient/new/parameters');
  }
);

appointmentRouter.post('/patient/new/parameters/pain/body/scale', routeGuard, (req, res, next) => {
  const numb = req.body.pain;
  res.redirect('/appointment/patient/new/parameters', numb);
});
module.exports = appointmentRouter;
