const express = require('express')
const app = express()
const path = require('path')
const bp = require('body-parser')
app.use(bp.json())
const port = 8000;

app.use(express.static(__dirname+'/Cold/dist'))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port)