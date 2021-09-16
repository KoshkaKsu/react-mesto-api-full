const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '6140e11400052d02771dd625',
  };
  next();
});

app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use(helmet());

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Ресурс не найден.' });
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: http://localhost:${PORT}`);
});
