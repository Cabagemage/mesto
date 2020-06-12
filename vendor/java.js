
const popUpButton = document.querySelector('.profile__edit');
const popUp = document.querySelector('.popup');
const openedPopUp = popUp.querySelector('.popup_get_opened');
const closePopUp = popUp.querySelector('.popup__close');
let popUpSave = popUp.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');


function PopUpOpen(){
popUp.classList.add('popup_get_opened');
console.log('PopUpOpen');
}

function PopUpClose(e){
popUp.classList.remove('popup_get_opened');

}
popUpButton.addEventListener('click', PopUpOpen);
closePopUp.addEventListener('click', PopUpClose);


// Находим форму в DOM
let formElement = document.querySelector('input');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let popupName = popUp.querySelector('.popup__name');
    let popupInfo = popUp.querySelector('.popup__info');
    profileName.textContent = 'New';
    popupName.textContent = 'New';
    // Получите значение полей из свойства value
    console.log(value);
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popUpSave.addEventListener('submit', formSubmitHandler);