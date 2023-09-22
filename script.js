'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', CloseModal);

overlay.addEventListener('click', CloseModal);

// Using the escape key to close the modal

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }
});
