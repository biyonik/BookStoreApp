const express = require('express');
const {StatusCodes} = require("http-status-codes");
const {saveUser, findUser} = require("../services/userService");
const bcrypt = require('bcrypt');
const router = express.Router();
const UserModel = require('../models/userModel');
const {errorHandler} = require("../utils/errorHandler");

router.post('/register', async (requestObject, responseObject) => {
    const {email} = requestObject.body;
    findUser({email: email})
        .then(user => {
            if (user) {
                responseObject.status(StatusCodes.CONFLICT)
                    .json({
                        message: 'User already registered! Try logging in.'
                    });
            } else {
                const user = new UserModel();
                const newUser = Object.assign(user, requestObject.body);
                bcrypt.hash(newUser.password, 10, async function (err, hash) {
                    if (err) {
                        return responseObject.status(StatusCodes.NOT_IMPLEMENTED)
                            .json({
                                message: `Error: ${err.message}`
                            });
                    } else {
                        newUser.password = hash;
                        saveUser(newUser)
                            .then(user => {
                                responseObject.status(StatusCodes.CREATED)
                                    .json({
                                        message: 'Successfully registration!',
                                        user: user
                                    });
                            })
                            .catch(err => {
                                errorHandler(responseObject, err);
                            });
                    }
                });
            }
        })
        .catch(err => {
            errorHandler(responseObject, err);
        });
});

router.post('/login', (requestObject, responseObject) => {

});

module.exports = router;
