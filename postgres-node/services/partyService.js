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

//  Create party
async function createParty(party){
    const rows = await db.connectDb(`INSERT INTO t_party(id, name, password, username) VALUES(default, '${party.name}','${party.password}', '${party.username}');`);
    const data = helper.emptyOrRows(rows);
  
    return {
      data,
    }
  }


module.exports = {
  getParties
}
