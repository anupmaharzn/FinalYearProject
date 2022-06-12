const express = require('express');

const app = express();

const errorMiddleware = require('./middleware/error');

const dotenv = require('dotenv');
//yo locate garyeko .env file
dotenv.config({ path: 'backend/config/config.env' });
const api = process.env.API_URL;


//middleware
app.use(express.json());


//Route imports
const product = require('./routes/productRoute');

app.use(`${api}`, product);

//position matters sadly ducking top down approach
//middleware for error
app.use(errorMiddleware);

module.exports = app;
