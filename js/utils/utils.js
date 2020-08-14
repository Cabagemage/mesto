
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
