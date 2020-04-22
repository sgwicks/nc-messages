const usersRouter = require('express').Router();
const { getUser } = require('../controllers/users.js');

usersRouter.route('/:user_id').get(getUser);

module.exports = usersRouter;
