const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors, celebrate, Joi } = require('celebrate');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mycors = require('./middlewares/cors');

const app = express();

/* const corsOptions = {
  origin: ['http://localhost:3000', 'https://api.mesto.autors.nomoredomains.icu', 'https://mesto.autors.nomoredomains.work'],
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin',
   'Access-Control-Allow-Methods', 'Access-Control-Request-Headers', 'Origin'],
  enablePreflight: true,
}; */

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

require('dotenv').config();

app.use(helmet());
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(mycors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(/^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([/\w \\.-]*)*\/?$/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
  }),
}), createUser);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

app.use(auth);
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена!'));
});
app.use('/', express.json());
app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  // если возникает ошибка,которую мы не предусмотрели, статус 500
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'Error!'
        : message,
    });
  next();
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${PORT}`);
});
