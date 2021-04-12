/**
 * file: ./src/config/mongooseConnection.config.js
 * description: file responsible for all application connection from mongodb
 * data: 20/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const mongoose = require('mongoose');
const database = require('./db.config');

    mongoose.Promise = global.Promise;
    mongoose.connect(database.local.localDatabaseUrl,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => {
            console.log('Conectado na base de dados!');
        }, (err) => {
            console.log(`Erro ao conectar com mongodb:... ${err}`);
            process.exit();
        });
