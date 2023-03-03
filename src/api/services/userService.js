const User = require('../models/User');
const { InvalidEntriesCreate } = require('../utils/validators/InvalidEntriesCreate');
const { InvalidEntriesLogin } = require('../utils/validators/InvalidEntriesLogin');
const { generateToken } = require('../utils/tokenHandler');

const create = async (request) => {
  if (InvalidEntriesCreate(request) !== undefined) { throw new Error('ValidationError'); } 

  const user = User.findByEmail(request.email);
  if (user) throw new Error('ValidationError');

  const result = User.create(request);
  return result;
};

const login = async (request) => {
  if (InvalidEntriesLogin(request) !== undefined) {
    throw new Error('ValidationError');
  }
  const user = User.findByEmail(request.email);

  if (!user || user.password !== request.password) {
    throw new Error('UnauthorizedError');
  }
  return generateToken(user);
};

const listAllUsers = () => {
  const result = User.listAllUsers();
  if (result) return result;
  throw new Error('NotFoundError');
};

module.exports = {
  create,
  listAllUsers,
  login,
};
