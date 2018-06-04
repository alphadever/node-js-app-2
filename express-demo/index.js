const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const express = require('express');
const app = express();
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const genres = require('./routes/genres');
const port = process.env.PORT || 3000;

console.log(`${config.get('name')}`);
console.log(`${config.get('mail.host')}`);
//console.log(`${config.get('mail.password')}`);

startupDebugger('start-up debugger');
dbDebugger('start-up debugger');

app
    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))
    .use('/api/genres', genres)
    .listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

var validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
};