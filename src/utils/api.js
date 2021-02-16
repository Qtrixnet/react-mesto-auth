//* Класс для взаимодействия с сервером
class Api {
  constructor(data) {
    this._baseUrl = data.serverUrl;
    this._token = data.token;
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  //* Запрос данных пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос изначальных карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._requestResult(res));
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на редактирование данных пользователя
  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на добавление карточки
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на удаление карточки
  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на добавление или удаление лайки карточки
  changeCardLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: !isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._requestResult(res));
  }

  // //* Запрос на добавление лайка карточке
  addCardLike(data) {
    return fetch(`${this._baseUrl}/cards/likes/${data}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._requestResult(res));
  }

  // //* Запрос на удаление лайка карточки
  // deleteCardLike(data) {
  //   return fetch(`${this._baseUrl}/cards/likes/${data}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: this._token,
  //     },
  //   }).then((res) => this._requestResult(res));
  // }
}

const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-19",
  token: "4fc24223-fbb6-4e5b-bedd-d51fcb2b9911",
});

export default api;