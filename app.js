const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 9000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors('*'));
app.use(bodyParser.json());
app.use('/api/user', require('./routes/user.route'));


app.listen(port, function() {
    console.log('Start app');
})

