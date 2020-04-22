const { fetchUser } = require('../models/users.js');

exports.getUser = (req, res, next) => {
  fetchUser();
};
