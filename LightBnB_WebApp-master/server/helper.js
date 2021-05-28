const { Pool } = require('pg');

pool = new Pool ({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

module.exports = {
  query: (text, params) => {
    console.log(params);
    return pool.query(text, params).then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
  },
  reservations: (text, params) => {
    console.log(params);
    return pool.query(text, params).then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
  },
}