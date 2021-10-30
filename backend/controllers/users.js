/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const UnauthorizedError = require('../errors/unauthorized-err');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');

const { NODE_ENV, JWT_SECRET } = process.env;

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).select('+password').then((user) => {
    if (!user) {
      throw new UnauthorizedError('Неверная почта или пароль!');
    }
    return bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          throw new UnauthorizedError('Неверная почта или пароль!');
        }
        return user;
      });
  }).then((user) => {
    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === 'production' ? JWT_SECRET : 'password',
      { expiresIn: '7d' },
    );
    res.send({ token });
  })
    .catch((err) => {
      next(new UnauthorizedError(`Произошла ошибка: ${err.message}`));
    });
};

const getUsers = (req, res, next) => {
  User.find({}, { __v: 0 })
    .then((user) => res.status(200).send(user))
    .catch(next);
};

const getUserMe = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError('Пользователь с таким id не найден!'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некоректный запрос!'));
      } else next(err);
    });
};

const getUserByID = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new NotFoundError('Пользователь с таким id не найден!'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некоректный запрос!'));
      } else next(err);
    });
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt.hash(password, 10).then((hash) => User.create({
    name, about, avatar, email, password: hash,
  }).then((user) => {
    res.status(200).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
      _id: user._id,
    });
  })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некоректные данные для создания пользователя!'));
      } else if (err.name === 'MongoError' && err.code === 11000) { //  случай, когда пользователь пытается зарегистрироваться по уже существующему в базе email
        next(new ConflictError('Такой пользователь уже зарегистрирован!'));
      } else next(err);
    }));
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: false,
    })
    .orFail(new NotFoundError('Пользователь с таким id не найден!'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некоректные данные при обновления профиля!'));
      } else next(err);
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: false,
    })
    .orFail(new NotFoundError('Неверный id пользователя!'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некоректные данные при обновления аватара!'));
      } else next(err);
    });
};

module.exports = {
  getUsers, getUserMe, getUserByID, createUser, login, updateProfile, updateAvatar,
};
