const {connect, disconnect} = require('../db');
const {findUser, saveUser} = require('./userService');
const UserModel = require('../models/userModel');
const mongoose = require('mongoose');

beforeAll(async () => {
    return await connect();
});

describe('User Test Suite', () => {
    test('As a user I want to save a user to he database', async () => {
        const newUser = new UserModel({
            firstName: 'John',
            lastName: 'Doe',
            address: 'Doe Street',
            city: 'Doepolis',
            zipCode: '8896',
            email: 'john@doe.com',
            password: 'doe123/*@john'
        });
        const user = await saveUser(newUser)
        expect(user.firstName).toEqual('John');
        expect(user.lastName).toEqual('Doe');
        expect(user.address).toEqual('Doe Street');
        expect(user.city).toEqual('Doepolis');
        expect(user.zipCode).toEqual('8896');
        expect(user.email).toEqual('john@doe.com');
        expect(user.password).toEqual('doe123/*@john');
    });
});

afterAll(async () => {
    return await disconnect();
})
