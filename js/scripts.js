'use strict';

const navMenu = document.getElementById('nav__menu');
const navList = document.getElementById('nav__list');
const navLink = document.getElementById('nav__link');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});
