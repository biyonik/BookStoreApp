const http = require('http');
const app = require("./app");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
