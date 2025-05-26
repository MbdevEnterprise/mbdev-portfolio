const spotlight = document.querySelector(".spotlight");
document.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.index-item');
    const sections = document.querySelectorAll('section');

    // Función para actualizar el link activo por clic
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Función para actualizar el link activo por scroll
    window.addEventListener('scroll', () => {
      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        items.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });
