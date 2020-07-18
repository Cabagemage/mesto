const popupButtonEdit = document.querySelector('.profile__edit');
const popupButtonAdd = document.querySelector('.profile__add');
//popups
const popupEdit = document.querySelector('.popup_function_edit');
const popupAdd = document.querySelector('.popup_function_add');
const popupOpenImage = document.querySelector('.popup_function_image');
const popupImageWindow = document.querySelector('.image');
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




function createNewCard(item) {
  const gridCard = gridCardsTemplateElement.content.cloneNode(true);
  const gridCardPhoto = gridCard.querySelector('.grid-card__photo');
  const gridCardTitle = gridCard.querySelector('.grid-card__title');
  gridCardTitle.textContent = item.name;
  gridCardPhoto.src = item.link;;
  gridCardPhoto.alt = `Изображение не загрузилось`;
  gridCard.querySelector('.grid-card__remove').addEventListener('click', removeCard);
  gridCard.querySelector('.grid-card__like-button').addEventListener('click', toggleLike);
  gridCardPhoto.addEventListener('click', () => openImagePopup(item))
  return gridCard;
}

function renderCards(gridCard) {
  gridCardElements.prepend(gridCard);
}

const addNewCard = (gridCard) => {
  const nameAndLink = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  renderCards(createNewCard(nameAndLink, gridCard))
  closePopup(popupAdd)
  inputPlace.value = '';
  inputLink.value = ''
}

initialCards.forEach(item => {
  const gridCard = createNewCard(item)
  renderCards(gridCard, item)
});

function openImagePopup(item) {
  const image = item.link;
  const name = item.name;
  popupImageWindow.src = image;
  popupImageText.textContent = name;
  popupImageWindow.alt = `Изображение не загрузилось`;
  openPopup(popupOpenImage);
}



function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeByEscape);
}

function closeByEscape(evt){
  const closeEachPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') { 
closePopup(closeEachPopup)
  }
}



function toggleLike(e) {
  const gridCard = e.target.closest('.grid-card__like-button');
  gridCard.classList.toggle('grid-card__like-button_like_active');
}

function removeCard(e) {
  const gridCard = e.target.closest('.grid-card');
  gridCard.remove();
}

const closeByOverlay = function (e) {
  if (e.target !== e.currentTarget) { return }
  closePopup(e.currentTarget);
}



closePopupEdit.addEventListener('click', function () {
  closePopup(popupEdit);
})

closePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
})

popupButtonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
})

popupButtonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
})

closePopupImage.addEventListener('click', function () {
  closePopup(popupOpenImage);
});

formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addNewCard()
});

popupEdit.addEventListener('click', closeByOverlay);
popupOpenImage.addEventListener('click', closeByOverlay);
popupAdd.addEventListener('click', closeByOverlay);


formElementEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);

});
