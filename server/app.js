// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const oauth2 = require('./oauth2');

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(function (req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});

// [START session]
// Configure the session and session storage.
const sessionConfig = {
    resave: false,
    saveUninitialized: false,
    secret: config.get('SECRET'),
    signed: true
};

app.use(session(sessionConfig));
// [END session]

// API
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// OAuth2
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./oauth2').router);

app.use('/api', require('./api/index'));

// Always return the main index.html, so react-router render the route in the client
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('*', oauth2.required, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;