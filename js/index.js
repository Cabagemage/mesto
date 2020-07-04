import {initialCards} from './utils.js';
const popupButtonEdit = document.querySelector('.profile__edit');
const popupButtonAdd = document.querySelector('.profile__add');
//popups
const popup = document.querySelector('.popup');
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


function cardContent(item){
const gridCard = gridCardsTemplateElement.content.cloneNode(true);
const gridCardPhoto = gridCard.querySelector('.grid-card__photo');
const gridCardTitle = gridCard.querySelector('.grid-card__title');
gridCardTitle.textContent = item.name;
gridCardPhoto.src =  item.link;
gridCard.querySelector('.grid-card__remove').addEventListener('click', removeCard);
gridCard.querySelector('.grid-card__like-button').addEventListener('click', toggleLike);
gridCardPhoto.addEventListener('click', function(){
openImagePopup(item)
});
gridCardElements.prepend(gridCard);
}

function openImagePopup(item){
  const image = item.link;
  const name  = item.name;
  popupImageWindow.src = image; 
  popupImageText.textContent = name;
  popupToggle(popupOpenImage);
  }
  
initialCards.forEach (item => {
  cardContent(item);
  });

function toggleLike(e){
const gridCard = e.target.closest('.grid-card__like-button');
gridCard.classList.toggle('grid-card__like-button_like_active');
}

function removeCard(e){
  const gridCard = e.target.closest('.grid-card');
  gridCard.remove();
}

function  popupToggle(popup){
popup.classList.toggle('popup_opened');
}

function closeByOverlay(e){
if(e.target !== e.currentTarget){
  return
}
popupToggle(popup);
}

popup.addEventListener('click', closeByOverlay);

closePopupEdit.addEventListener('click', function() {
popupToggle(popup);
})

closePopupAdd.addEventListener('click', function() {
  popupToggle(popupAdd)
  })

popupButtonEdit.addEventListener('click', function() {
  popupToggle(popupEdit)
 inputName.value = profileName.textContent;
 inputJob.value = profileJob.textContent;
})
popupButtonAdd.addEventListener('click', function() {
  popupToggle(popupAdd)
  })
  closePopupImage.addEventListener('click', function(){
    popupToggle(popupOpenImage)
  });

  formElementEdit.addEventListener('submit', function (evt){
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
  inputLink.value =  '';
  });
