require('dotenv').config();

const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('gorank');
});

app.listen(PORT, () => {
    debug(`Listening on port  ${chalk.green(PORT)}`);
});

