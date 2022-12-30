const express = require('express');
const router = express.Router();
const partyService = require('../services/partyService');

/* GET users.  */
router.get('/get/parties', async function(req, res, next) {
  console.log(req.query);
  try {
    res.json(await partyService.getParties());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


module.exports = router;
