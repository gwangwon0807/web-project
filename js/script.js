const toggle = document.getElementById('toggle');
const aside = document.querySelector('aside');
const header = document.querySelector('header');
const section2 = document.getElementById('section2')
const section3 = document.getElementById('section3');

toggle.onclick = function(){
  toggle.classList.toggle('active')
  aside.classList.toggle('active')
  header.classList.toggle('active')
  section2.classList.toggle('active');
  section3.classList.toggle('active');
}