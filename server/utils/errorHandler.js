const {StatusCodes} = require("http-status-codes");

const errorHandler = (responseObject, error) => {
    if (error.name === "ValidationError") {
        let errors = {};

        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });

        return responseObject.status(StatusCodes.BAD_REQUEST).send(errors);
    }
    responseObject.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong");
}

module.exports = {errorHandler}
