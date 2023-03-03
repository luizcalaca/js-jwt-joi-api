const Joi = require('joi'); 

const schema = Joi.object().keys({ 
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
}); 

const InvalidEntriesCreate = (input) => {
  const result = schema.validate(input);
  return result.error;
};

module.exports = {
  InvalidEntriesCreate,
};