const exress = require('express');
const product = require('./routes/product-router');

const app = exress();

const PORT = process.env.PORT || 5000;

app.use('api/product', product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
