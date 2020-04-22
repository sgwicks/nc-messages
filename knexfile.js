const { username, password } = require('./userconfig');

const dbConfig = {
  client: 'pg',
  connection: {
    database: 'messages',
    username,
    password
  },
  seeds: { directory: './db/seeds' },
  migrations: {
    directory: './db/migrations'
  }
};

module.exports = dbConfig;
