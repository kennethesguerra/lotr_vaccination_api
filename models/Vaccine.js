const pool  = require('../database');

const list = (callBack) => {
  pool.query(
    `SELECT * from vaccines`, 
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  )
}

module.exports.list = list;