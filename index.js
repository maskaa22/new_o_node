const express = require('express');
const product = require('./api/index');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));

// app.use('/api/product', product);

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
