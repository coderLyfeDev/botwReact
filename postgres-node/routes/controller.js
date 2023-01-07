const express = require('express');
const router = express.Router();
const partyService = require('../services/partyService');

/* GET parties.  */
router.get('/get/parties', async function(req, res, next) {
    console.log("/get/parties");
  console.log(req.query);
  console.log("query after");
  try {
    res.json(await partyService.getParties());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* Create party.  */
router.get('/create/parties', async function(req, res, next) {
    console.log("/create/parties");
  console.log(req);
  try {
    res.json(await partyService.createParty(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


module.exports = router;
