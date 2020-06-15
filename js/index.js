
const popUpButton = document.querySelector('.profile__edit');
const popUp = document.querySelector('.popup');
const openedPopUp = popUp.querySelector('.popup_get_opened');
const closePopUp = popUp.querySelector('.popup__close');
let popUpSave = popUp.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');
let inputName = popUp.querySelector('.popup__name');
let inputJob = popUp.querySelector('.popup__info');

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function PopUpOpen(){
popUp.classList.add('popup_get_opened');
console.log('PopUpOpen');
}

function PopUpClose(e){
popUp.classList.remove('popup_get_opened');

}
popUpButton.addEventListener('click', PopUpOpen);
closePopUp.addEventListener('click', PopUpClose);



let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault();


    let inputName = formElement.querySelector('.popup__name');
    let inputJob = formElement.querySelector('.popup__info');

    
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;



    console.log('formSubmitHandler');
}


formElement.addEventListener('submit', formSubmitHandler);
