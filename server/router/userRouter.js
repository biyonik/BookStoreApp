const express = require('express');
const {StatusCodes} = require("http-status-codes");
const router = express.Router();

router.get('/', (requestObject, responseObject, nextFunction) => {
    responseObject.status(StatusCodes.OK)
        .json({
            message: 'Successful - GET',
            metadata: {
                hostname: requestObject.hostname,
                method: requestObject.method
            }
        });
});

router.get('/:id', (requestObject, responseObject, nextFunction) => {
    responseObject.status(StatusCodes.OK)
        .json({
            message: 'Successful - GET by Id',
            metadata: {
                id: requestObject.params.id,
                hostname: requestObject.hostname,
                method: requestObject.method
            }
        });
});

router.post('/', (requestObject, responseObject, nextFunction) => {
    const name = requestObject.body.name;
    responseObject.status(StatusCodes.OK)
        .json({
            message: 'Successful - POST',
            metadata: {
                name: name,
                hostname: requestObject.hostname,
                method: requestObject.method
            }
        });
});

router.put('/:id', (requestObject, responseObject, nextFunction) => {
    responseObject.status(StatusCodes.OK)
        .json({
            message: 'Successful - PUT by Id',
            metadata: {
                id: requestObject.params.id,
                hostname: requestObject.hostname,
                method: requestObject.method
            }
        });
});

router.delete('/:id', (requestObject, responseObject, nextFunction) => {
    responseObject.status(StatusCodes.OK)
        .json({
            message: 'Successful - DELETE by Id',
            metadata: {
                id: requestObject.params.id,
                hostname: requestObject.hostname,
                method: requestObject.method
            }
        });
});

module.exports = router;
