const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config();

require('./initDB')();

app.use(express.json())
app.use(cors())

app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running."));