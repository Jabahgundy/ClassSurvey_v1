'use strict';

const http = require('http')
const hostname = 'localhost';
const port = 3333;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');

app.use(express.static('public'));
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Listening at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');

app.use('/', rootController);