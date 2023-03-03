const jwt = require('jsonwebtoken');
const { jwtKey, jwtOptions } = require('./config');

const generateToken = (user) => {
  const payload = {
    email: user.email,
    role: user.role,
  };
    return jwt.sign(payload, jwtKey, jwtOptions);
  };

const validateToken = (token) => {
    const parsed = jwt.verify(token, jwtKey);
    return parsed;
};

module.exports = { generateToken, validateToken };