const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const { planetsRouter, } = require('./routes/planets/planets.router');
const { launchesRouter, } = require('./routes/launches/launches.router');

const app = express();

app.use(cors({ origin: 'https://api-test-jru2.onrender.com' }));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

app.get(['/', '/launch', '/upcoming', '/history'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

app.get('*', (req, res) => {
    res.status(404).send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Not Found</title>
        <style>
        /* Center the content both vertically and horizontally */
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
    </style>
    </head>
    <body>
        <h1>404 - Not Found :(</h1>
        <p>The page you are looking for does not exist.</p>
    </body>
    </html>`);
})


module.exports = app;