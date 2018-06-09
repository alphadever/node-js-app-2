const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/nodeapp2')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(`Could not connect to MongoDB... ${err.message}`));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.listen(port, () => console.log(`Listening on port ${port}...`));
