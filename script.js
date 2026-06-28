const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const form = document.querySelector('#lead-form');
const formMessage = document.querySelector('#form-message');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navMenu.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Спасибо! Заявка подготовлена. Свяжитесь с клиентом удобным способом.';
  form.reset();
});
