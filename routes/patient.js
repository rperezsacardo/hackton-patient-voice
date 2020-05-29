'use strict';

const { router } = require('express');

router.get('/', (req, res, next) => {
  res.render('user');
});

module.exports = router;
