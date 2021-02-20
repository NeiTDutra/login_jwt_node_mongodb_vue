/**
 * file: ./src/midlewares/auth.js
 * description: file responsible for all authentications for the app
 * data: 19/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace('Bearer', '');
        const decoded = jwt.verify(token, 'secret');
        req.userData = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Erro de autenticação!', err: toString(err) });
    }
};
