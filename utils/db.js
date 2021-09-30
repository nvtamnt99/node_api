const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '311299',
      database : 'nodejs_login'
    }
  });

  module.exports = knex;