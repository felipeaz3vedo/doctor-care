window.addEventListener('scroll', onScroll);

const statistics = document.querySelector('.statistics');
const navigation = document.getElementById('navigation');

function onScroll() {
  showNavOnScroll();
  showBackToTopButton();
}

function showNavOnScroll() {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
}

const statisticsPosition = statistics.getBoundingClientRect();
console.log(statisticsPosition)

function showBackToTopButton() {
  scrollY > statisticsPosition.top
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show');
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}
function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,services header, 
  #services .card, 
  #about header,
  #about .content,
  #about .content img
`);
