const popupProfile = document.querySelector('.popup_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupButtonCloseProfile = document.querySelector('.popup__button-close_profile');
const popupFormProfile = document.querySelector('.form_profile');
const nameInput = document.getElementById('profile');
const descriptionInput = document.getElementById('description');
const nameOutput = document.querySelector('.profile__title');
const descriptionOutput = document.querySelector('.profile__description');



const template = document.querySelector('#elements_template').content;
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

const initialCards = [
  {
    name: 'Архыз',
    link: './images/Karachaevsk.jpg'
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
  }
];



function openPopup(popup) {
  popup.classList.add('popup_open')
}


function closePopup(popup) {
  popup.classList.remove('popup_open')
}

function openEditPopup() {
  openPopup(popupProfile);
  nameInput.value = nameOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
}

function submitEditProfile(evt) {
  evt.preventDefault();
  nameOutput.textContent = nameInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

function addCard(event) {
  event.preventDefault();
  closePopup(popupAddCard);
  const newCard = {
    name: placeCardName.value,
    link: placeLink.value
  }
  popupFormAddCard.reset();
  render(newCard);
}

function openCard(click) {
  openPopup(popupImages);
  cardImage.alt = click.target.alt;
  cardImage.src = click.target.src;
  popupImageText.innerText = click.target.alt;
};

function createCard(card) {
  const newCard = template.cloneNode(true);
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
  }

  const elementsImage = newCard.querySelector('.elements__item');
  elementsImage.addEventListener('click', openCard);
  return newCard;
}


function render(card) {
  elementsContainer.prepend(createCard(card));
}

function renderCardsFromArray() {
  initialCards.reverse().forEach(render);
}
renderCardsFromArray()


profileEditButton.addEventListener('click', openEditPopup);
popupButtonCloseProfile.addEventListener('click', () => { closePopup(popupProfile) });
popupFormProfile.addEventListener('submit', submitEditProfile);

profileAddButton.addEventListener('click', () => { openPopup(popupAddCard) });
popupButtonCloseCard.addEventListener('click', () => { closePopup(popupAddCard) });
popupFormAddCard.addEventListener('submit', addCard);
popupImageCloseButton.addEventListener('click', () => { closePopup(popupImages) });