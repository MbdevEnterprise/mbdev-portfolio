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


  

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const icon  = document.getElementById('theme-icon');
    const body  = document.body;

    // Inicializa estado
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      body.classList.add('light-mode');
      icon.textContent = 'lightmode';
    } else {
      icon.textContent = 'darkmode';
    }

    toggle.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-mode');

      // Actualiza icono
      icon.textContent = isLight ? 'lightmode' : 'darkmode';

      // Guarda preferencia
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  });



  
   document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.classList.remove('out-view');
          } else {
            entry.target.classList.remove('in-view');
            entry.target.classList.add('out-view');
          }
        });
      },
      {
        threshold: 0.5 // se activa cuando al menos 10% del elemento es visible
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  });
