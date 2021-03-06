import { data } from "jquery";
// Попытка задеплоить
export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    checkStatus(res){
        if (res.ok){
        return res.json()}
        else{return Promise.reject(`Ошибка: ${res.status}`)}
    }

    getAppinfo() {
        return Promise.all([this.getInitialCards(), this.getUserInformation()])
    }

    // Получение массива карточек с сервера
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
            .then(this.checkStatus)
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
        .then(this.checkStatus)
    };
    // Метод для удаления карточки
    deleteThisCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'Delete',
            headers: this.headers
        })
        .then(this.checkStatus)
    }
    // Метод для получения инфы профиля
    getUserInformation() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        })
        .then(this.checkStatus)
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

        }).then(this.checkStatus)

    }
    //Метод для изменения аватарки
    changeProfileAvatar(newavatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: newavatar
            })

        }).then(this.checkStatus)
    }
    // Лайкос
    putLikeToCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this.headers
        }).then(this.checkStatus)
    }

    //Удаление лайкоса
    deleteLikeOfCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        }).then(this.checkStatus)
    }
}
