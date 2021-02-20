/**
 * file: server.js
 * description: file responsible for all application configuration and execution
 * data: 17/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const app = require('./src/app');
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log('listen on port:... ', port);
});
