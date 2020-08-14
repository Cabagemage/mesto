export default class UserInfo {
    constructor({ name, job }) {
        this.profileName = name;
        this.profileJob = job;
    }
    getUserInfo() {
        return {
            name: this.profileName.textContent,
            job: this.profileJob.textContent,
        }
    }
    setUserInfo({ name, job }) {
        this.profileName.textContent = name;
        this.profileJob.textContent = job;
    }
} 