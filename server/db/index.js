require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect(process.env.MONGOURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('Error from connect to MongoDB: ' + err));
};

const disconnect = async () => {
    await mongoose.connection.close();
}

module.exports = {connect, disconnect};
