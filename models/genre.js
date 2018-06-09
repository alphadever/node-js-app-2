const mongoose = require('mongoose');
const Joi = require('joi');

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

const Genre = mongoose.model('Genre', {
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
});

module.exports = { validateGenre, Genre };
