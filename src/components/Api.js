import { data } from "jquery";
// Попытка задеплоить
export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getAppinfo() {
        return Promise.all([this.getInitialCards(), this.getUserInformation()])
    }

    // Получение массива карточек с сервера
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
            .then(res => res.json())
    }

    // Метод для создания новой карточки 
    postNewCard(data) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        })
            .then(res => res.json())
    };
    // Метод для удаления карточки
    deleteThisCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'Delete',
            headers: this.headers
        })
            .then(res => res.json())
    }
    // Метод для получения инфы профиля
    getUserInformation() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        })
            .then(res => res.json())
    }
    //Метод для изменения инфы профиля
    setUserInfo(newname, newabout) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: newname,
                about: newabout,
            })

        }).then(res => res.json())

    }
    //Метод для изменения аватарки
    changeProfileAvatar(newavatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: newavatar
            })

        }).then(res => res.json())
    }
    // Лайкос
    putLikeToCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this.headers
        }).then(res => res.json())
    }

    //Удаление лайкоса
    deleteLikeOfCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        }).then(res => res.json())
    }
}
