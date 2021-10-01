const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 9000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors('*'));
app.use('/api/users', require('./routes/user.route'));

app.listen(port, function() {
    console.log('Start app');
})

