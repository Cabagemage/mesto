const popupButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let inputName = formElement.querySelector('.popup__input_type_name');
let inputJob = formElement.querySelector('.popup__input_type_job');

function  popupOpen(){
popup.classList.add('popup_opened');
inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

}

function popupClose(e){
popup.classList.remove('popup_opened');

}

function formSubmitHandler (evt) {
    evt.preventDefault();
    popup.classList.remove('popup_opened');
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;

}


formElement.addEventListener('submit', formSubmitHandler);
popupButton.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose);
