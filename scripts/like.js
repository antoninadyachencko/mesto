function toggleLike() {
    this.classList.toggle("element__like-button_active");
}
window.addEventListener("load", () => {
    const likes = document.querySelectorAll(".elements__item-like-button");
    likes.forEach(x => x.addEventListener("click", toggleLike));
});
