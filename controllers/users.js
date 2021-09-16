const User = require('../models/user');

const Error400 = 400;
const Error404 = 404;
const Error500 = 500;

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => res.status(Error500).send({ message: 'Ошибка по умолчанию.' }));
};

module.exports.getUserByID = (req, res) => {
  User.findById(req.params.userId)
    .orFail(new Error('IncorrectID'))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(Error400).send({ message: 'Переданы некорректные данные при создании пользователя.' });
      } else if (err.message === 'IncorrectID') {
        res.status(Error404).send({ message: 'Пользователь по указанному _id не найден.' });
      } else {
        res.status(Error500).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(Error400).send({ message: err.message });
      } else {
        res.status(Error500).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: false,
    })
    .orFail(new Error('IncorrectID'))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.message === 'IncorrectID') {
        res.status(Error404).send({ message: 'Пользователь по указанному _id не найден.' });
      } else if (err.name === 'ValidationError') {
        res.status(Error400).send({ message: 'Переданы некорректные данные при обновлении профиля.' });
      } else {
        res.status(Error500).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: false,
    })
    .orFail(new Error('IncorrectID'))
    .then((user) => { res.status(200).send(user); })
    .catch((err) => {
      if (err.message === 'IncorrectID') {
        res.status(Error404).send({ message: 'Пользователь по указанному _id не найден.' });
      } else if (err.errors) {
        res.status(Error400).send({ message: 'Переданы некорректные данные при обновлении аватара.' });
      } else {
        res.status(Error500).send({ message: 'Ошибка по умолчанию.' });
      }
    });
};
