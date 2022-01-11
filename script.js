const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal-btn");
const closeModal = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModal.addEventListener("click", (e) => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
