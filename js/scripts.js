// You can add JavaScript code here if needed
// For example, handling dynamic behavior or interactivity

// Check if the current page is index.html
if (window.location.pathname.endsWith('projects.html')) {
    // Get all the card elements
    const cards = document.querySelectorAll('.card');
  
    // Iterate over each card element
    cards.forEach((card, index) => {
      // Get the image element within the card
      const image = card.querySelector('.card-img-top');
  
      // Set the image source to the corresponding image in the /images folder
      image.src = `images/projects/image${index + 1}.webp`;
      image.alt = `Image ${index + 1}`;
    });

    if (window.location.pathname.endsWith('index.html')) {
        // Get all the card elements
        const media = document.querySelectorAll('.mr-3');
      
        // Iterate over each card element
        medias.forEach((media, index) => {
          // Get the image element within the card
          $(this).append('img-fluid') =
          console.log("hello"+$(this))     
        });
  }
  