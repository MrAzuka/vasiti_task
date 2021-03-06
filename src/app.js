const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();
require("./utils/passport");

const middlewares = require('./middlewares');
const authRoute = require('./routes/auth.route')
const userRoute = require('./routes/user.route')

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', authRoute);
app.use('/api/v1', userRoute);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
