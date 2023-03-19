const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

http.createServer().listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
