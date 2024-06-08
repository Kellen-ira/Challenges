document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
  
    galleryContainer.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('gallery-item')) {
        e.target.style.transform = 'scale(12.12)';
        e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      }
    });
  
    galleryContainer.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('gallery-item')) {
        e.target.style.transform = 'scale(12)';
        e.target.style.boxShadow = 'none';
      }
    });
  
    galleryContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('gallery-item')) {
        const imgSrc = e.target.querySelector('img').src;
        const imgAlt = e.target.querySelector('img').alt;
  
        alert(`You clicked on image ${imgAlt} with src ${imgSrc}`);
      }
    });
  });