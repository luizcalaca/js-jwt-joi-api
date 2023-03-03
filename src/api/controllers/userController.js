const userService = require('../services/userService');

const create = async (request, response, next) => {
  try {
    const result = await userService.create(request.body);
    response.status(201).json({ response: result });
  } catch (error) {
    next(error);
  }
};

const login = async (request, response, next) => {
  try {
    const token = await userService.login(request.body);
    response.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const listAllUsers = async (request, response, next) => {
  try {
    const users = await userService.listAllUsers();
    response.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  listAllUsers,
  login,
};