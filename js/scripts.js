'use strict';

const navMenu = document.getElementById('nav__menu');
const navList = document.getElementById('nav__list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});
