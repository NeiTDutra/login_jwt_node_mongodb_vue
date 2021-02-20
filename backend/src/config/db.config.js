/**
 * file: ./src/confid/db.config.js
 * description: file responsible for all connections with the db mongodb
 * data: 17/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    local: {
        localDatabaseUrl: process.env.DB_URI,
        secret: 'password'
    }
};
