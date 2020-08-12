export default class UserInfo{
    constructor({name, about}){
        this._profileName = name;
        this._profileAbout = about;
    }
    getUserInfo(){
        return {
        name: this._profileName.textContent,
        about: this._profileAbout.textContent,
        }
    }
    setUserInfo({name, about}){
        this._profileName.textContent = name;
        this._profileAbout.textContent = about; 
    }
} 