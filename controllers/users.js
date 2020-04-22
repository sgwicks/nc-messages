const { fetchUser } = require('../models/users.js');

exports.getUser = (req, res, next) => {
  const { user_id } = req.params;
  fetchUser(user_id).then(([user]) => res.status(200).send({ user }));
};
