const pool  = require('../database');

const list = (callBack) => {
  pool.query(
    `SELECT vn.*, v.name as vaccine_name FROM vaccinees vn INNER JOIN vaccines v ON v.id = vn.vaccine_id`, 
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  )
}

const create = (data, callBack) => {
  pool.query(
    `INSERT INTO vaccinees (firstname, 
      lastname, 
      birthdate, 
      location, 
      with_comorbidity, 
      vaccine_id, 
      dose, 
      first_dose_sched, 
      second_dose_sched) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        data.firstname, 
        data.lastname,
        data.birthdate,
        data.location, 
        data.with_comorbidity, 
        data.vaccine_id, 
        data.dose, 
        data.first_dose_sched, 
        data.second_dose_sched 
      ], 
      (error, results) => {
        if (error) {
          return callBack(error)
        }
        return callBack(results);
      }
  )
}

const update = (data, callBack) => {
  pool.query(
    `UPDATE vaccinees SET 
      firstname=?, 
      lastname=?, 
      birthdate=?, 
      location=?,
      with_comorbidity=?,
      vaccine_id=?,
      dose=?,
      first_dose_sched=?,
      second_dose_sched=? 
    WHERE id = ?`, 
    [
      data.firstname, 
      data.lastname,
      data.birthdate,
      data.location, 
      data.with_comorbidity, 
      data.vaccine_id, 
      data.dose, 
      data.first_dose_sched, 
      data.second_dose_sched, 
      data.id
    ], 
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(results);
    }
  )
}

const remove = (id, callBack) => {
  pool.query(`DELETE FROM vaccinees WHERE id=?`, [
    id
  ], (error, results) => {
    if (error) {
      return callBack(error);
    }
    return callBack(results);
  })
}

module.exports.list = list;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;