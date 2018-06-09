const mongoose = require('mongoose');
const Joi = require('joi');

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(3).required(),
    isGold: Joi.boolean(),
    phone: Joi.string().min(10).required(),
  };

  return Joi.validate(customer, schema);
}

const Customer = mongoose.model('Customer', {
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
  isGold: {
    type: Boolean,
    defualt: false,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = { Customer, validateCustomer };
