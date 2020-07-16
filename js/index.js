
const popupButtonEdit = document.querySelector('.profile__edit');
const popupButtonAdd = document.querySelector('.profile__add');
//popups
const popupEdit = document.querySelector('.popup_function_edit');
const popupAdd = document.querySelector('.popup_function_add');
const popupOpenImage = document.querySelector('.popup_function_image');
const popupImageWindow = document.querySelector('.popup__container_content_img');
const popupImageText = document.querySelector('.popup__container_content_name');
//close popups
const closePopupEdit = popupEdit.querySelector('.popup_close_edit');
const closePopupAdd = popupAdd.querySelector('.popup_close_add');
const closePopupImage = popupOpenImage.querySelector('.popup__close_current_image');
// popups forms/inputs
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const formElementEdit = document.querySelector('.popup__form_function_edit');
const formElementAdd = document.querySelector('.popup__form_function_add');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');
const gridCardsTemplateElement = document.querySelector('.grid-card-template')
const gridCardElements = document.querySelector('.elements');



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },

];



function cardContent(item) {
  const gridCard = gridCardsTemplateElement.content.cloneNode(true);
  const gridCardPhoto = gridCard.querySelector('.grid-card__photo');
  const gridCardTitle = gridCard.querySelector('.grid-card__title');
  gridCardTitle.textContent = item.name;
  gridCardPhoto.src = item.link;
  gridCard.querySelector('.grid-card__remove').addEventListener('click', removeCard);
  gridCard.querySelector('.grid-card__like-button').addEventListener('click', toggleLike);
  gridCardPhoto.addEventListener('click', function () {
    openImagePopup(item)
  });
  gridCardElements.prepend(gridCard);
}

function openImagePopup(item) {
  const image = item.link;
  const name = item.name;
  popupImageWindow.src = image;
  popupImageText.textContent = name;
  popupToggle(popupOpenImage);
  document.addEventListener('keyup',  keyHandler);
}

initialCards.forEach(item => {
  cardContent(item);
});


const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    popupActive.classList.toggle('popup_opened')
    document.removeEventListener('keyup',  keyHandler);
  }
  
 
}


const popupToggle = function (popup) {
  popup.classList.toggle('popup_opened');
  
}


closePopupEdit.addEventListener('click', function () {
  popupToggle(popupEdit);
  document.removeEventListener('keyup',  keyHandler);
  
})

closePopupAdd.addEventListener('click', function () {
  popupToggle(popupAdd);
  document.removeEventListener('keyup',  keyHandler);
})

popupButtonEdit.addEventListener('click', function () {
  popupToggle(popupEdit);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  document.addEventListener('keyup',  keyHandler);
})

popupButtonAdd.addEventListener('click', function () {
  popupToggle(popupAdd);
  console.log(popupButtonAdd)
  document.addEventListener('keyup',  keyHandler);
})

closePopupImage.addEventListener('click', function () {
  popupToggle(popupOpenImage)
  document.removeEventListener('keyup',  keyHandler);
});



function toggleLike(e) {
  const gridCard = e.target.closest('.grid-card__like-button');
  gridCard.classList.toggle('grid-card__like-button_like_active');
}

function removeCard(e) {
  const gridCard = e.target.closest('.grid-card');
  gridCard.remove();
}



const closeByOverlay = function (e)  {
  if (e.target !== e.currentTarget) { return }
  popupToggle(e.currentTarget);
  console.log(e.target);
}

popupEdit.addEventListener('click', closeByOverlay);
popupOpenImage.addEventListener('click', closeByOverlay);
popupAdd.addEventListener('click', closeByOverlay);


formElementEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupToggle(popupEdit);
  
});

formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const nameAndLink = {
    name: inputPlace.value,
    link: inputLink.value
  };
  cardContent(nameAndLink)

  popupToggle(popupAdd)
  inputPlace.value = '';
  inputLink.value = '';
});