const usersRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (req, res, next) => {

    try {
        const users = await User.find({});

        res.json(users);
    } catch (error) {
        next(error);
    }


})

usersRouter.post('/', async (req, res, next) => {

    try {

        const { username, password } = req.body;

        if (password.length !== 6) {
            return next({ name: "ValidationError", message: "No tiene 6 caracteres" });
        }

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username,
            passwordHash,
        });

        const userSaved = await user.save();

        res.status(201).json(userSaved);

    } catch (error) {
        next(error);
    }


})

module.exports = usersRouter;