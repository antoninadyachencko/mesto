let profileName = "Жак-Ив Кусто";
let profileDescription = "Исследователь океана";

function openPopup() {
    const popup = document.querySelector(".popup");
    popup.classList.add("open"); 

    document.querySelector(".form__text-name").textContent = profileName;
    document.querySelector(".form__text-description").textContent = profileDescription; 
}

function closePopup() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("open"); 
}

function refreshData() {
    document.querySelector(".profile__title").textContent = profileName;
    document.querySelector(".profile__description").textContent = profileDescription;
}

function onSubmit(evt) {
    evt.preventDefault();

    profileName = document.querySelector(".form__text-name").value;
    profileDescription = document.querySelector(".form__text-description").value;

    refreshData();
    closePopup();
}; 

window.addEventListener("load", () => {
    const buttonEdit = document.querySelector(".profile__edit-button");
    buttonEdit.addEventListener("click", openPopup);
 
    const modalCloseButton = document.querySelector(".popup__button-close");  
    modalCloseButton.addEventListener("click", closePopup);

    const formElement = document.querySelector(".form");
    formElement.addEventListener("submit", onSubmit);

    refreshData();
});

