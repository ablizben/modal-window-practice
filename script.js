'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//open window function
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//close window function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

//click btn for window to show up
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

//close window when clicking on x
btnCloseModal.addEventListener('click', closeModal);
//close window when clicking outside of box
overlay.addEventListener('click', closeModal);