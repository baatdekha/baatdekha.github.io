console.log('Hello World!');

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let menu = document.querySelector('.menu')
let menuContent = document.querySelector('.menu-content')

menu.addEventListener('change',(e)=>{
  if (menu.checked) {
    menuContent.classList.add('opened')
  } else {
    menuContent.classList.remove('opened')
  }
})