const pool = require('../db');

const saveContact = (name, email, phone, message, callback) => {
  const sql = `
    INSERT INTO portfolio.contacts (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `;

  pool.query(
    sql,
    [name, email, phone, message],
    (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    }
  );
};

module.exports = { saveContact };
