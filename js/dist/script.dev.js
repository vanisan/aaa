"use strict";

var searchBtn = document.querySelector('#search-btn');
var searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = function () {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .navbar');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
};

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var slides = document.querySelectorAll('.home .slide');
var index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}