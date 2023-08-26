const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// connecting to db
connectToMongo();

app.get('/', (req, res) => {
    res.send('BACKEND RUNNING');
})
