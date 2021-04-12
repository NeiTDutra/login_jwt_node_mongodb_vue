/**
 * file: app.js
 * description: file responsible for all application configuration and execution
 * data: 17/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

// ==> variáveis de importação

// => libs and files imports

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongooseConnection = require('./config/mongooseConnection.config');

// => rotas da API

const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

// => express 

const app = express();

// => database config connection

app.set('conn', 'mongooseConnection');

// ==> app engine

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);
app.use('/api/v1', userRoutes);

module.exports = app;
