import './index.css'; 

import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js';
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  popupButtonEdit, popupButtonAdd, closePopupEdit, closePopupAdd, closePopupImage,
  formElementEdit, formElementAdd, inputName, inputJob, config, initialCards, userValues
} from '../utils/constants.js'


const formValidAdd = new FormValidator(config, formElementAdd);
formValidAdd.enableValidation();
const formValidEdit = new FormValidator(config, formElementEdit);
formValidEdit.enableValidation();

const popupImage = new PopupWithImage('.popup_function_image')
  popupImage.setEventListeners()


function createNewCard(data) {

  const createCard = new Card({
    data, handleCardClick: () => {
     popupImage.open(data)
    }
  }, '.grid-card-template');

  const getNewCard = createCard.generateCard()
  defaultSection.addItemPrepend(getNewCard)
}

const defaultSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      createNewCard(data)
    }
  }, '.elements')


defaultSection.renderAppend()


const popupAdd = new PopupWithForm('.popup_function_add',
  {
    handleFormSubmit: (data) => {
      createNewCard(data)

      popupAdd.close()
    }
  })
popupAdd.setEventListeners()

const userInformation = new UserInfo(userValues)

const popupToEdit = new PopupWithForm('.popup_function_edit',
  {
    handleFormSubmit: (data) => {
      userInformation.setUserInfo(data)
      popupToEdit.close()
    }
  })
popupToEdit.setEventListeners()



closePopupEdit.addEventListener('click', function () {
  popupToEdit.close()
})

closePopupAdd.addEventListener('click', function () {
  popupAdd.close();
})

popupButtonEdit.addEventListener('click', () => {
  const getInfo = userInformation.getUserInfo()
  inputName.value = getInfo.name;
  inputJob.value = getInfo.job;
  popupToEdit.open()
  formValidEdit.saveFormResult(); // теперь используется :) 

})

popupButtonAdd.addEventListener('click', () => {
  popupAdd.open();
  formValidAdd.resetForm()
})

closePopupImage.addEventListener('click', function () {
  popupImage.close()
});
