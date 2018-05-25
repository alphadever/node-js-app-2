const express = require('express');
const app = express();
const Joi = require('joi');
const port = process.env.PORT || 3000;

const genres = [{
        id: 1,
        name: 'Action'
    },
    {
        id: 2,
        name: 'Horror'
    },
    {
        id: 3,
        name: 'Romance'
    },
];

app
    .use(express.json())
    .get('/api/genres/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let genre = genres.find(i => i.id === id);
        if (genre) res.send(genre);
        else res.status(404).send('The genre with the given ID was not found.');
    })
    .get('/api/genres', (req, res) => {
        res.send(genres);
    })
    .post('/api/genres', (req, res) => {
        let {error} = validateGenre(req.body);
        let newGenre = {
            id: genres.length + 1,
            name: req.body.name
        };
        if (!error) {
            genres.push(newGenre);
            res.send(newGenre);
        } else
            res.status(400).send(`invalid payload: ${error.message}`);
    })
    .put('/api/genres/:id', (req, res) => {
        res.send(req.query);
    })
    .delete('/api/genres/:id', (req, res) => {
        res.send(req.query);
    })
    .listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

var validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
};