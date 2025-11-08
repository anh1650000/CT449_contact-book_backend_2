const express = require('express');
const cors = require('cors');

const app = express();
const contactRouter = require('./app/routes/contact.router');

// ---------------Use Cases-----------------------
// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Contact routes
app.use('/api/contacts', contactRouter);

// ------------------Route-------------------------
// default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
});

// ---------Middleware Error Handling---------------
app.use((req, res, next) => {
    return next(new APIError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});



// ---------------Export----------------------
module.exports = app;