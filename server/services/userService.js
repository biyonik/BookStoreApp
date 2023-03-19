const UserModel = require('../models/userModel');

const findUser = async (obj) => {
    return UserModel.findOne(obj);
}

const saveUser = async (newUser) => {
    return await newUser.save();
}

module.exports = {
    findUser, saveUser
};
