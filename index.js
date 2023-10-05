const express = require('express');
const product = require('./api/product-router');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));

app.use('/api/product', product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
