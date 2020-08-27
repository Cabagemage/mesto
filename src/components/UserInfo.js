export default class UserInfo {
    constructor({ name, about, avatar }) {
        this.profileName = document.querySelector(name);
        this.profileAbout = document.querySelector(about);
        this.profileAvatar = document.querySelector(avatar)
    }
    getUserInfo() {
        return {
            name: this.profileName.textContent,
            about: this.profileAbout.textContent,
            avatar: this.profileAvatar
        }
    }
    setUserInfo({ name, about, id }) {
        this.profileName.textContent = name;
        this.profileAbout.textContent = about;
        this.id = id;
    }
    setUserAvatar(avatar){
        this.profileAvatar.src = avatar
    }
} 