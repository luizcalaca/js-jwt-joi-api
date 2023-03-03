const { validateToken } = require('../utils/tokenHandler');

const auth = (request, response, next) => {
  const token = request.headers.authorization;
  if (!token) {
    throw new Error('TokenError');
  }

  try {
    request.user = validateToken(token);
    next();
  } catch (err) {
    throw new Error('TokenError');
  }
};

module.exports = auth;