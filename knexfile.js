const { username, password } = require('./userconfig');

const dbConfig = {
  client: 'pg',
  connection: {
    database: 'messages',
    username,
    password
  },
  seeds: { directory: './db/seeds' }
};

module.exports = dbConfig;

// migrations: {
//   directory: "./db/migrations"
// }
