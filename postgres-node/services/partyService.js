const db = require('./db');
const helper = require('../helper');

let userId = null;

//Get users
async function getParties(){
  const rows = await db.query('SELECT * FROM t_party');
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


module.exports = {
  getParties
}
