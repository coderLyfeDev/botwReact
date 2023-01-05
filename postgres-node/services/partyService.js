const db = require('../db');
const helper = require('../helper');

let userId = null;

//  Get users
async function getParties(){
  const rows = await db.connectDb('SELECT * FROM t_party');
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}


module.exports = {
  getParties
}
