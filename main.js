// Menu toggle button

const barMenu = document.querySelector('#menu-btn');
const xbarMenu = document.querySelector('#xmenu-btn');
const menuList = document.querySelector('#menu');

barMenu.addEventListener('click', () => {
  barMenu.classList.remove('block');
  barMenu.classList.add('hidden');
  xbarMenu.classList.remove('hidden');
  xbarMenu.classList.add('block');

  menuList.classList.remove('hidden');
});

xbarMenu.addEventListener('click', () => {
  xbarMenu.classList.remove('block');
  xbarMenu.classList.add('hidden');
  barMenu.classList.remove('hidden');
  barMenu.classList.add('block');

  menuList.classList.add('hidden');
});

window.onscroll = () => {
  menuList.classList.add('hidden');
  xbarMenu.classList.remove('block');
  xbarMenu.classList.add('hidden');
  barMenu.classList.remove('hidden');
  barMenu.classList.add('block');
};



// Image switching
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image = document.getElementById('image');

image1.addEventListener('click', function() {
  image.setAttribute('src', image1.getAttribute('src'));
});

image2.addEventListener('click', function() {
  image.setAttribute('src', image2.getAttribute('src'));
});

image3.addEventListener('click', function() {
  image.setAttribute('src', image3.getAttribute('src'));
});

image4.addEventListener('click', function() {
  image.setAttribute('src', image4.getAttribute('src'));
});
