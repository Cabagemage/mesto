import {initialCards, inputLink, inputPlace, popupAdd} from './constants.js';
import Card  from '../components/Card.js';

export const closeByOverlay = function (e) {
  if (e.target !== e.currentTarget) { return }
  closePopup(e.currentTarget);
}
const nameAndLink = {
  name: inputPlace.value,
  link: inputLink.value,
};
const { name, link } = nameAndLink;
console.log(name, link)
export const addNewCard = () => {
    console.log(nameAndLink)
    const createNewCard = createGridCard(nameAndLink, '.grid-card-template');
    createNewCards(createNewCard)
    closePopup(popupAdd)
    inputPlace.value = '';
    inputLink.value = ''
  }
  
 export  function createGridCard(data, templateSelector) {
    const gridCard = new Card(data, templateSelector).generateCard()
  
    return gridCard
  }
  
  export const createNewCards = (item) => {
    document.querySelector('.elements').prepend(item)
  }
  
  export const createDefaultCards = (data) => {
    const defaultCards = createGridCard(data, '.grid-card-template');
    document.querySelector('.elements').append(defaultCards)
  
  }
  
  export const renderCards = () => {
    initialCards.forEach(data => {
      createDefaultCards(data)
    })
  }
  

  
 export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closeByEscape);
  }
  
 export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeByEscape);
  }
  
 export function closeByEscape(evt) {
    const closeEachPopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
      closePopup(closeEachPopup)
    }
  }
