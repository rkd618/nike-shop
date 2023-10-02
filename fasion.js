document.addEventListener("DOMContentLoaded", function () {

// THIS IS FOR THE NAV BAR AND CONVERSION BETWEEN THE MENU AND CLOSE
  const toggleButton = document.getElementById('menu-toggle');
  const navbar = document.getElementById('responsive-nav');

  let isMenuOpen = false;
  toggleButton.addEventListener('click', () => {
    if (isMenuOpen) {
      toggleButton.classList.remove('ri-close-line');
      toggleButton.classList.add('ri-menu-line');
      isMenuOpen = false;
    } else {
      toggleButton.classList.remove('ri-menu-line');
      toggleButton.classList.add('ri-close-line');
      isMenuOpen = true;
    }
    navbar.classList.toggle('active');
  });

const elements = document.querySelectorAll('.elem');

// Add click event listeners to each "READ MORE" and "READ LESS" button
elements.forEach((element) => {
  const readMoreButton = element.querySelector('.read-more-button');
  const readLessButton = element.querySelector('.read-less-button');
  const description = element.querySelector('.description');
  const cardH5 = element.querySelector('.elem h5'); // H5 element
  const cardH4 = element.querySelector('.elem h4'); // H4 element
  const cardImg = element.querySelector('.elem img'); // Image element

  // Show description and move the element up when "READ MORE" is clicked
  readMoreButton.addEventListener('click', () => {
    description.style.display = 'block';
    element.style.transform = 'translateY(-45px)'; // Move up by 50px (adjust as needed)
    readMoreButton.style.display = 'none';
    cardH5.style.opacity = '0.2'; 
    cardH4.style.opacity = '0.2'; 
    cardImg.style.opacity = '0.2'; 
    element.classList.add('reduced-opacity');
    readLessButton.style.display = 'block';
  });

  // Hide description and move the element back to its original position when "READ LESS" is clicked
  readLessButton.addEventListener('click', () => {
    description.style.display = 'none';
    element.style.transform = 'translateY(0)';
    element.classList.remove('reduced-opacity');
    cardH5.style.opacity = '1'; 
    cardH4.style.opacity = '1'; 
    cardImg.style.opacity = '1'; 
    readMoreButton.style.display = 'block';
    readLessButton.style.display = 'none';
  });
});

});