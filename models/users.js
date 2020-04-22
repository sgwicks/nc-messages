const connection = require('../db/connection');

exports.fetchUser = (user_id) => {
  return connection('users')
    .select('*')
    .where('user_id', user_id)
    .then((user) => user);
};
