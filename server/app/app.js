const express = require('express');
const {StatusCodes} = require("http-status-codes");
const cors = require('cors');
const app = express();
const userRouter = require('../router/userRouter');

// Use middleware to form our contract for incoming json payloads ONLY!
app.use(express.json());

// Use middleware for url encoding
app.use(express.urlencoded({extended: true}));

// Use middleware to handle cors policy
app.use(cors());

// Actuator point
app.get('/', (requestObject, responseObject, nextFunction) => {
    responseObject.status(StatusCodes.OK)
        .json({
            'message': 'Service is up!'
        });
});

// Routers
app.use('/api/v1/users', userRouter);

// Bad url or error can handle with middleware
app.use((requestObject, responseObject, nextFunction) => {
    const errorObject = new Error('Not found!');
    errorObject.status = StatusCodes.NOT_FOUND;
    nextFunction(errorObject);
});

app.use((errorObject, requestObject, responseObject, nextFunction) => {
    responseObject.status(errorObject.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            error: {
                message: errorObject.message,
                status: errorObject.status
            }
        });
});

module.exports = app;
