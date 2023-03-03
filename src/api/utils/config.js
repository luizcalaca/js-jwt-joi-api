const jwtOptions = {
  expiresIn: process.env.TOKEN_DURATION || '1h',
};
const jwtKey = process.env.TOKEN_KEY || 'R$%#!@#$%AEDY';

module.exports = {
  jwtOptions,
  jwtKey,
};