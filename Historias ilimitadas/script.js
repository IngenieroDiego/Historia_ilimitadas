// Código JavaScript para agregar interactividad al sitio web

// Aqui va a ir: mostrar el contenido completo de la historia al hacer clic en "Leer más"
  const readMoreButtons = document.querySelectorAll('.read-more');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const storyContent = event.target.previousElementSibling;
      storyContent.style.display = 'block';
      button.style.display = 'none';
    });
  });
  
  // Aqui va a ir: mostrar la imagen de la historia en tamaño completo al hacer clic en ella
  const storyImages = document.querySelectorAll('.story-image');
  
  storyImages.forEach(image => {
    image.addEventListener('click', event => {
      const fullScreenImage = document.createElement('img');
      fullScreenImage.src = event.target.src;
      fullScreenImage.style.width = '100%';
      fullScreenImage.style.height = '100%';
      fullScreenImage.style.position = 'fixed';
      fullScreenImage.style.top = '0';
      fullScreenImage.style.left = '0';
      fullScreenImage.style.zIndex = '9999';
      fullScreenImage.addEventListener('click', () => {
        document.body.removeChild(fullScreenImage);
      });
      document.body.appendChild(fullScreenImage);
    });
  });
  
  // Aqui va a ir: filtrar historias por categoría al hacer clic en la categoría correspondiente
  