const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
        maxlength: [32, '{PATH} alanı maksimum {MAXLENGTH} karakter uzunluğunda olabilir!'],
        minlength: [3, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!'],
    },
    lastName: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
        maxlength: [32, '{PATH} alanı maksimum {MAXLENGTH} karakter uzunluğunda olabilir!'],
        minlength: [3, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!'],
    },
    address: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
    },
    city: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
    },
    zipCode: {
        type: String
    },
    email: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '{PATH} alanı geçerli bir e-posta adresi değil!'],
        unique: [true, '{PATH} alanı benzersiz olmalıdır. Bu e-posta adresi kullanılmakta!']
    },
    password: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz']
    }
});


module.exports = mongoose.model('User', userSchema);
