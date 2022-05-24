class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }


    getCards() {
      return fetch(`${this._baseUrl}/cards/`, {
        headers: this._headers
      })
      .then(this._checkResponse)
    }

    addNewCard(cardData) {
      return fetch(`${this._baseUrl}/cards/`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          row: `${cardData.name}`,
          text: `${cardData.link}`,
        })
      })
      .then(this._checkResponse)
    }

    updateCard(cardData) {
      return fetch(`${this._baseUrl}/cards/${cardData.id}/`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          row: `${cardData.row}`,
          seq_num: `${cardData.seqNum}`,
          text: `${cardData.text}`
        })
      })
      .then(this._checkResponse)
    }

    deleteCard(cardID) {
      return fetch(`${this._baseUrl}/cards/${cardID}`, {
        method: 'DELETE',
        headers: this._headers,
      })
        .then(this._checkResponse)
    }

//     // получение массива начальных карточек с сервера
//     getInitialCards() {
//       return fetch(`${this._baseUrl}/cards`, {
//         headers: this._headers
//       })
//       .then(this._checkResponse)
//     }

//     // переключение лайка
//     changeLikeCardStatus(cardID, isLiked) {
//       if(!isLiked) {
//         return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
//           method: 'PUT',
//           headers: this._headers,
//         })
//           .then(this._checkResponse)
//       } else {
//         return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
//           method: 'DELETE',
//           headers: this._headers,
//         })
//           .then(this._checkResponse)
//       }
//     }

//     // изменить аватар пользователя
//     changeAvatar(avatarUrl) {
//       return fetch(`${this._baseUrl}/users/me/avatar`, {
//         method: 'PATCH',
//         headers: this._headers,
//         body: JSON.stringify({
//           avatar: `${avatarUrl}`,
//         })
//       })
//         .then(this._checkResponse)
//     }
  }

  const api = new Api({
    baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1',
    headers: {
      'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MjQsInVzZXJuYW1lIjoicnUiLCJleHAiOjE2NTI3NDc1ODIsImVtYWlsIjoicnVAZXhhbXBsZS5jb20iLCJvcmlnX2lhdCI6MTY1Mjc0Mzk4Mn0.WiS3fjDe5389jvDeEjAE3bgef5JlAnf3_oA6hkyNlXM',
      'Content-Type': 'application/json'
    }
  });

  export default api
