/**
 * file: ./src/controllers/user.controllers.js
 * description: file responsible for the CRUD of class Users
 * data: 18/02/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

const User = require('../models/user.model');

exports.registerNewUser = async (req, res) => {
    try {
        const isUser = await User.find({ email: req.body.email });
        console.log(isUser);

        if(isUser.length >= 1) {
            return res.status(409).json({ message: 'Sorry! This email is alread registerred!' });
        }

        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken();
        res.status(200).json({ message: 'User created successfully', user, token });
    } catch (err) {
        res.status(400).json({ err: err.toString() });
    }
};
 
exports.loginUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);

        if(!user) {
            return res.status(401).json({ error: 'Erro ao realizar login... Verifique as credenciais' });
        }

        const token = await user.generateAuthToken();
        res.status(201).json({ message: 'Usuário(a) logado(a) com sucesso', user, token });
    } catch (err) {
        res.status(400).json({ err });
    }
};

exports.returnUserProfile = async (req, res) => {
    await res.json(req.userData);
};
