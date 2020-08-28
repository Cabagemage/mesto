import './index.css';

import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import {
  popupButtonEdit,
  popupButtonAdd,
  closePopupEdit,
  closePopupAdd,
  closePopupRemoveButton,
  closePopupImage,
  closePopupAvatar,
  formElementEdit,
  formElementAdd,
  formElementAvatar,
  inputName,
  inputJob,
  config
}
  from '../utils/constants.js'
import {buttonPreloader, pagePreloader} from '../utils/preloader.js'
import { data } from 'jquery';

const formValidAdd = new FormValidator(config, formElementAdd);
formValidAdd.enableValidation();
const formValidEdit = new FormValidator(config, formElementEdit);
formValidEdit.enableValidation();
const formValidAvatar = new FormValidator(config, formElementAvatar);
formValidAvatar.enableValidation();


let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: '60dbe103-3bf7-4b68-8dd7-d41370d9694c',
    'Content-Type': 'application/json'
  }

});

pagePreloader(true);
api.getAppinfo().then(res => {
  const [initialCards, info] = res

  const userInformation = new UserInfo({
    name: '.profile__name',
    about: '.profile__subtitle',
    avatar: '.profile__image',
  });

  userInformation.setUserInfo({
    name: info.name,
    about: info.about,
    userId: info._id,
  });
  userInformation.setUserAvatar(info.avatar)
  function createNewCard(data) {


    const createCard = new Card(
      {
        userId: info._id,
        data: {
          name: data.name,
          link: data.link,
          owner: data.owner._id,
          likes: data.likes
        },
        handleCardClick: () => {
          popupImage.open(data)
        },

        handleLikeClick: () => {
          api.putLikeToCard(data._id, info._id)
            .then(data => {
              createCard.updateLikes(data.likes);
              createCard.toggleLike();
            });
        },
        handleDislikeClick: () => {
          api.deleteLikeOfCard(data._id, info._id) //юзерайди
            .then(data => {
              createCard.updateLikes(data.likes);//юзерайди
              createCard.toggleLike();
            })

        },
        handleDeleteIconClick: () => {
          removePopup.open()
          removePopup.removeThisCard (() => {
          api.deleteThisCard(data._id)
            .then(id => {
              removePopup.removeThisCard(id)
              createCard.handleRemoveCard();
            })
          })
        },
      }, '.grid-card-template');

    const getNewCard = createCard.generateCard()
    defaultSection.addItemPrepend(getNewCard)
  }

  const popupImage = new PopupWithImage('.popup_function_image')
  const removePopup = new PopupWithSubmit('.popup_function_remove')

  const defaultSection = new Section(
    {
      items: initialCards,
      renderer: createNewCard
    }, '.elements');

  defaultSection.renderAppend()

  const avatarPopupOpen = document.querySelector('.profile__avatar')
  avatarPopupOpen.addEventListener('click', () => {
    popupAvatar.open()
  })

  const popupAvatar = new PopupWithForm('.popup_function_avatar',
    {
      handleFormSubmit: (data) => {
        buttonPreloader(true, '.popup__save_function_create')
        userInformation.setUserAvatar(data.avatar);
        api.changeProfileAvatar(data.avatar)
        formValidAvatar.resetForm();
        popupAvatar.close()
      }
    })

  const popupToEdit = new PopupWithForm('.popup_function_edit',
    {
      handleFormSubmit: (data) => {
        buttonPreloader(true, '.popup__save_function_edit')
        api.setUserInfo(data.name, data.about).then(res =>{
        userInformation.setUserInfo(res);
        })
        .finally(_ => buttonPreloader(false, '.popup__save_function_edit'))
        popupToEdit.close()
      }
    })

  closePopupEdit.addEventListener('click', function () {
    popupToEdit.close()
  })

  popupButtonEdit.addEventListener('click', () => {
    const getInfo = userInformation.getUserInfo()
    inputName.value = getInfo.name;
    inputJob.value = getInfo.about;
    popupToEdit.open()
    formValidEdit.saveFormResult();
  })

  closePopupImage.addEventListener('click', function () {
    popupImage.close()
  });
  
  return { 
      createNewCard, 
      popupAvatar, 
      userInformation, 
      popupToEdit, 
      defaultSection, 
      popupImage, 
      removePopup }
      
})
.then(res => {
  const { 
    popupAvatar, 
    popupToEdit, 
    popupImage, 
    removePopup, 
    createNewCard } = res;

  popupButtonAdd.addEventListener('click', () => {
    popupAdd.open();
    formValidAdd.resetForm()
  })

  const popupAdd = new PopupWithForm('.popup_function_add',
    {
      handleFormSubmit: (data) => {
        buttonPreloader(true, '.popup__save_function_create')
        api.postNewCard(data).then((res) => {
          createNewCard(res)
          popupAdd.close();
        }).finally(_ => buttonPreloader(false, '.popup__save_function_create'))
      }
    })

  closePopupAdd.addEventListener('click', function () {
    popupAdd.close();
  })

  closePopupAvatar.addEventListener('click', function () {
    popupAvatar.close();
  })

  closePopupRemoveButton.addEventListener('click', function () {
    removePopup.close();
  })

  popupAdd.setEventListeners()
  popupAvatar.setEventListeners()
  popupToEdit.setEventListeners()
  popupImage.setEventListeners()
  removePopup.setEventListeners();
}).catch(err => console.log(err))
.finally(_ => pagePreloader(false))












