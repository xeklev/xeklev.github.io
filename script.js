const yearElement = document.getElementById('year');
const root = document.documentElement;

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Always use dark theme by default (toggle removed)
root.setAttribute('data-theme', 'dark');

const navLinks = document.querySelectorAll('.nav a');
const sections = [...document.querySelectorAll('main section[id]')];

const setActiveLink = () => {
  let activeId = sections[0]?.id;
  const offset = window.innerHeight * 0.25;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top - offset <= 0 && rect.bottom > offset) {
      activeId = section.id;
    }
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.style.color = isActive ? 'var(--accent-strong)' : '';
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);
