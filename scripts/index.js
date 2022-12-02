const popup = document.querySelector(".popup");
const popupName = document.querySelector(".form__text-input[name='name']");
const popupDescription = document.querySelector(".form__text-input[name='description']");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function openPopup() {
  popup.classList.add("popup_open"); 
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove("popup_open");
}

function onSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value
  closePopup();
}; 

window.addEventListener("load", () => {
  const buttonEdit = document.querySelector(".profile__edit-button");
  buttonEdit.addEventListener("click", openPopup);
 
  const modalCloseButton = document.querySelector(".popup__button-close");  
  modalCloseButton.addEventListener("click", closePopup);

  const formElement = document.querySelector(".form");
  formElement.addEventListener("submit", onSubmit);
});





 