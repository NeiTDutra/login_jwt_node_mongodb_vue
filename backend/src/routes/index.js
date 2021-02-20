/**
 * file: ./src/routes/index.js
 * description: file responsible for all application default routes
 * data: 17/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const express = require('express');
const router = express.Router();

router.get('/api/v1', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Sucesso ao acessar API Node.js + MongoDB + Azure!',
        version: '1.0.0'
    });
});

module.exports = router;
