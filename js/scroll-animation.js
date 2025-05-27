// // scroll-animations.js

// // Настройки Intersection Observer
// const observerOptions = {
//   threshold: 0.1 // запускать при появлении хотя бы 10% элемента
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target); // отключить наблюдение после появления
//     }
//   });
// }, observerOptions);

// // Наблюдаем за всеми элементами с классом 'animate-item'
// document.querySelectorAll('.animate-item').forEach(item => {
//   observer.observe(item);
// });

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { threshold: 0.1 };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-item').forEach(item => {
    observer.observe(item);
  });
});