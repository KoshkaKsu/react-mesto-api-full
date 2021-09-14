const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,

    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,

  },
  owner: { //ссылка на модель автора карточки
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: [{ //список лайкнувших пост пользователей
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: 'user',
  }],
  createdAt: { //дата создания
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);