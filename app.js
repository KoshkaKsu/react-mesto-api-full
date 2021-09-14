const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { PORT = 3000 } = process.env;

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

app.use('/', express.json());
app.use("/", require("./routes/users"));
app.use("/", require("./routes/cards"));

app.use("*", (req, res) => {
  res.status(404).send({ message: "Ресурс не найден." });
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: http://localhost:${PORT}`);
});