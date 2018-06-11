const mongoose = require('mongoose');
const {GenreSchema} = require('./genre');
const Joi = require('joi');

const Movie = mongoose.model('Movie', {
    title:{
        type: String,
        required: true,
        trim: true,
        minlenght: 5,
        maxlength: 255
    },
    genre:{
        type: GenreSchema,
        required: true,
    },
    numberInStock:{
        type: Number,   
        min: 0,
        max: 255,
    },
    dailyRentalRate:{
        type: Number,
        min: 0,
        max: 255,
    }
});