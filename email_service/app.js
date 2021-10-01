'use strict';

const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const emailRoute = require('./src/controller/emailController');

const PORT = process.env.PORT || 5001; 

env.config();

app.use(express.json());
app.use(cors());


app.use('/api/messaging/email', emailRoute);

app.listen(PORT, () => {
    console.log(`Messaging service started on port : ${PORT}`);
});
