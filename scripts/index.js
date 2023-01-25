const popupProfile = document.querySelector('.popup_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupButtonCloseProfile = document.querySelector('.popup__button-close_profile');
const popupFormProfile = document.querySelector('.form_profile');
const nameInput = document.getElementById('profile');
const descriptionInput = document.getElementById('description');
const nameOutput = document.querySelector('.profile__title');
const descriptionOutput = document.querySelector('.profile__description');



const template = document.querySelector('#elements_template').content.querySelector('.elements__list');
const elementsContainer = document.querySelector('.elements__container');
const profileAddButton = document.querySelector('.profile__add-button');
const popupButtonCloseCard = document.querySelector('.popup__button-close_card');
const popupAddCard = document.querySelector('.popup_card');
const popupFormAddCard = document.querySelector('.form_card');
const placeCardName = document.getElementById('card-place');
const placeLink = document.getElementById('card-link');

const popupImages = document.querySelector('.popup_images');
const popupImageCloseButton = document.querySelector('.popup__button-close_image');
const cardImage = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__image-text');

function openPopup(popup) {
  document.addEventListener('keydown', closePopupEscape);
  popup.classList.add('popup_open')
};


function closePopup(popup) {
  document.removeEventListener('keydown', closePopupEscape);
  popup.classList.remove('popup_open')
};

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
};

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_open');
    closePopup(openPopup);
  }
};

function openEditPopup() {
  openPopup(popupProfile);
  nameInput.value = nameOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
};

function submitEditProfile(evt) {
  evt.preventDefault();
  nameOutput.textContent = nameInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup(popupProfile);
};

function addCard(event) {
  event.preventDefault();
  const newCard = {
    name: placeCardName.value,
    link: placeLink.value
  }
  render(newCard);
  closePopup(popupAddCard);
  popupFormAddCard.reset();
  resetValidation();
};

function openCard(click) {
  cardImage.alt = click.target.alt;
  cardImage.src = click.target.src;
  popupImageText.innerText = click.target.alt;
  openPopup(popupImages);
};

function createCard(card) {
  const newCard =  template.cloneNode(true);
  newCard.querySelector('.elements__item-title').textContent = card.name;
  newCard.querySelector('.elements__item').src = card.link;
  newCard.querySelector('.elements__item').alt = card.name;

  const likeCard = newCard.querySelector('.elements__item-like-button');
  likeCard.addEventListener('click', () => {
    likeCard.classList.toggle('elements__item-like-button_active');
  });

  const deleteButton = newCard.querySelector('.elements__item-delete-button');
  deleteButton.addEventListener('click', deleteCard);

  function deleteCard(click) {
    click.target.closest(".elements__list").remove();
  };

  const elementsImage = newCard.querySelector('.elements__item');
  elementsImage.addEventListener('click', openCard);
  return newCard;
};

function render(card) {
  elementsContainer.prepend(createCard(card));
};

function renderCardsFromArray() {
  initialCards.reverse().forEach(render);
};
renderCardsFromArray();


profileEditButton.addEventListener('click', openEditPopup);
popupButtonCloseProfile.addEventListener('click', () => { closePopup(popupProfile) });
popupFormProfile.addEventListener('submit', submitEditProfile);

profileAddButton.addEventListener('click', () => { openPopup(popupAddCard)});
popupButtonCloseCard.addEventListener('click', () => { closePopup(popupAddCard) });
popupFormAddCard.addEventListener('submit', addCard);
popupImageCloseButton.addEventListener('click', () => { closePopup(popupImages) });

popupProfile.addEventListener('click', closePopupOverlay);
popupImages.addEventListener('click', closePopupOverlay);
popupAddCard.addEventListener('click',closePopupOverlay);