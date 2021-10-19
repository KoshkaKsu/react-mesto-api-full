// 500 — ошибка по умолчанию. Сопровождается сообщением «На сервере произошла ошибка».
class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }
}
module.exports = ServerError;
