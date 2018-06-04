const express = require('express');
const router = express.Router();

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


router.get('/', (req, res) => {
        res.send(genres);
    })
    .post('/', (req, res) => {
        let {
            error
        } = validateGenre(req.body);
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
    .get('/:id', (req, res) => {
        let id = parseInt(req.params.id);
        let genre = genres.find(i => i.id === id);
        if (genre) res.send(genre);
        else res.status(404).send('The genre with the given ID was not found.');
    })
    .put('/:id', (req, res) => {
        const genre = genres.find(c => c.id === parseInt(req.params.id));
        if (!genre) return res.status(404).send('The genre with the given ID was not found.');

        const {
            error
        } = validateGenre(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        genre.name = req.body.name;
        res.send(genre);
    })
    .delete('/:id', (req, res) => {
        const genre = genres.find(c => c.id === parseInt(req.params.id));
        if (!genre) return res.status(404).send('The genre with the given ID was not found.');

        const index = genres.indexOf(genre);
        genres.splice(index, 1);

        res.send(genre);
    });

module.exports = router;