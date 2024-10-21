document.addEventListener('DOMContentLoaded', () => {
    // Animación de desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de habilidades
       // Animación de habilidades
       const skills = document.querySelectorAll('.skill');
       skills.forEach(skill => {
           skill.addEventListener('mouseover', () => {
               skill.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.2)`;
               skill.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.7)';
           });
           skill.addEventListener('mouseout', () => {
               skill.style.transform = 'rotate(0deg) scale(1)';
               skill.style.boxShadow = 'none';
           });
       });
   
       // Animación de proyectos
       const projectCards = document.querySelectorAll('.project-card');
       projectCards.forEach(card => {
           card.addEventListener('mousemove', (e) => {
               const rect = card.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
   
               const rotateY = ((x - rect.width / 2) / rect.width) * 20;
               const rotateX = ((y - rect.height / 2) / rect.height) * -20;
   
               card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
           });
   
           card.addEventListener('mouseleave', () => {
               card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
           });
       });
   
       // Animación del formulario de contacto
       const contactForm = document.getElementById('contact-form');
       contactForm.addEventListener('submit', (e) => {
           e.preventDefault();
           const formData = new FormData(contactForm);
           // Aquí puedes agregar la lógica para enviar el formulario
           
           // Animación de éxito
           const button = contactForm.querySelector('button');
           button.innerHTML = '¡Enviado!';
           button.style.backgroundColor = '#2ecc71';
           
           setTimeout(() => {
               button.innerHTML = 'Enviar';
               button.style.backgroundColor = '#3498db';
               contactForm.reset();
           }, 3000);
       });
   
       // Animación de aparición al hacer scroll
       const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('visible');
               } else {
                   entry.target.classList.remove('visible');
               }
           });
       }, { threshold: 0.1 });
   
       document.querySelectorAll('section > *').forEach(el => {
           el.classList.add('hidden');
           observer.observe(el);
       });
   
       // Animación de partículas
       particlesJS('particles-js', {
           particles: {
               number: { value: 80, density: { enable: true, value_area: 800 } },
               color: { value: "#ffffff" },
               shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
               opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
               size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
               line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
               move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
           },
           interactivity: {
               detect_on: "canvas",
               events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
               modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
           },
           retina_detect: true
       });
   });