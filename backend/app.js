const express = require('express');

const app = express();

const dotenv = require('dotenv');
//yo locate garyeko .env file
dotenv.config({ path: 'backend/config/config.env' });
const api = process.env.API_URL;


//middleware
app.use(express.json());


//Route imports
const product = require('./routes/productRoute');

app.use(`${api}`, product);

module.exports = app;
