const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '311299',
      database : 'valo_chat_clone'
    }
  });

  module.exports = knex;