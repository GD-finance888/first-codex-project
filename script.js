const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

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

// Явно обозначаем публичную тестовую версию сайта.
const testBanner = document.createElement('div');
testBanner.setAttribute('role', 'status');
testBanner.textContent = 'Сайт находится в тестовом режиме. Заявки и оплата временно не принимаются.';
Object.assign(testBanner.style, {
  padding: '12px 20px',
  textAlign: 'center',
  background: '#fff3cd',
  color: '#6b5200',
  borderBottom: '1px solid #ead58b',
  fontWeight: '800'
});
document.body.prepend(testBanner);

// Отключаем все призывы оставить заявку до юридической подготовки.
document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.removeAttribute('href');
  link.textContent = 'Заявки временно закрыты';
  link.setAttribute('aria-disabled', 'true');
  Object.assign(link.style, {
    opacity: '0.62',
    cursor: 'not-allowed',
    pointerEvents: 'none'
  });
});

// Помечаем все цифры в аналитической панели как демонстрационные.
const demoBadge = () => {
  const badge = document.createElement('small');
  badge.textContent = 'Демонстрационный пример';
  Object.assign(badge.style, {
    display: 'block',
    marginTop: '4px',
    color: '#6b5200',
    fontSize: '0.7rem',
    fontWeight: '800'
  });
  return badge;
};

document.querySelectorAll('.metric-row strong').forEach((value) => {
  value.insertAdjacentElement('afterend', demoBadge());
});

const insightBox = document.querySelector('.insight-box');
if (insightBox) {
  insightBox.prepend(demoBadge());
}

const cardHeader = document.querySelector('.dashboard-card .card-header');
if (cardHeader) {
  const headerBadge = demoBadge();
  headerBadge.style.marginTop = '0';
  cardHeader.append(headerBadge);
}

// Полностью убираем форму, чтобы сайт не собирал персональные данные.
const contactSection = document.querySelector('#contact');
const form = document.querySelector('#lead-form');
if (contactSection) {
  const heading = contactSection.querySelector('.section-heading');
  if (heading) {
    heading.innerHTML = `
      <p class="eyebrow">Тестовый режим</p>
      <h2>Форма заявки временно отключена</h2>
      <p>Мы завершаем юридическую подготовку сайта и оформление обработки персональных данных.</p>
    `;
  }
}

if (form) {
  form.innerHTML = `
    <h3>Заявки пока не принимаются</h3>
    <p style="margin-bottom:0;color:#607086;">Поля для имени, телефона и Telegram удалены. Сайт сейчас не собирает и не сохраняет персональные данные посетителей.</p>
  `;
  form.removeAttribute('id');
}

const footerText = document.querySelector('.site-footer span');
if (footerText) {
  footerText.textContent = '© 2026 WB Fin.Analytics · Тестовый сайт';
}
