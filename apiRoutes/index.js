const router = require('express').Router();

router.use('/users', require('./placeHolder')); // matches all requests to /api/placeHolder/

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
  
  module.exports = router;