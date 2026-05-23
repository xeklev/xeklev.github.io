document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const finishLoading = () => {
    document.body.classList.remove('is-loading');
  };

  if (document.readyState === 'complete') {
    finishLoading();
  } else {
    window.addEventListener('load', finishLoading, { once: true });
  }

  // Force dark configuration safely
  document.documentElement.setAttribute('data-theme', 'dark');

  const navLinks = document.querySelectorAll('.nav a');
  const sections = [...document.querySelectorAll('main section[id]')];

  const setActiveLink = () => {
    let activeId = sections[0]?.id;
    const offset = window.innerHeight * 0.3; // Trigger threshold

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top - offset <= 0 && rect.bottom > offset) {
        activeId = section.id;
      }
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${activeId}`;
      link.style.fontWeight = isActive ? '600' : '400';
      link.style.opacity = isActive ? '1' : '0.78';
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  window.addEventListener('load', setActiveLink);
});
