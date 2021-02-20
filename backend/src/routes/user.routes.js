/**
 * file: ./src/routes/user.routes.js
 * description: file responsible for all routes of Users
 * data: 18/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * =>from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const auth = require('../midlewares/auth');

router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
