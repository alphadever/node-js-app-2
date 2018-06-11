const mongoose = require('mongoose');
const Joi = require('joi');

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}

const GenreSchema = new mongoose.schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
});

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = { validateGenre, Genre, GenreSchema };
