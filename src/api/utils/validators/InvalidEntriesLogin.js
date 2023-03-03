const Joi = require('joi'); 

const schema = Joi.object().keys({ 
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}); 

const InvalidEntriesLogin = (input) => {
  const result = schema.validate(input);
  return result.error;
};

module.exports = {
  InvalidEntriesLogin,
};
