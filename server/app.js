const express = require('express');
const app = express();
require('./DB/dbs');
const router = require('./Routes/route');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/v1/user', router);

app.listen(3003, () => {
    console.log("Server is running on 3003");
});
