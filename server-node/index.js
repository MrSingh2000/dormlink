const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// connecting to db
connectToMongo();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/docs', require('./routes/docs'));
app.use('/api/admin', require('./routes/admin'));

app.listen(port, () => {
    console.log(`BACKEND RUNNING on http://localhost:${port}`);
})
