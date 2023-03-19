const express = require('express');
const {StatusCodes} = require("http-status-codes");
const {saveUser} = require("../services/userService");
const router = express.Router();

router.post('/register', (requestObject, responseObject) => {

});

router.post('/login', (requestObject, responseObject) => {

})



module.exports = router;
