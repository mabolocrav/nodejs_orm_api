require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
const productsRouter = require('./products/products.controller');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

//API Routes
app.use('/users', require('./users/users.controller'));
app.use('/products', productsRouter);

//global error handler
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log(`Server listening on port ` + port));