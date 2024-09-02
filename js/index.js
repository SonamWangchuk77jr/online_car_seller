// Responsive Navbar
function toggleMenu() {
  const menu = document.querySelector('.nav-items-list');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}


// Function to handle the focus and blur events on input fields
function handleInputFocusBlur() {
    const inputs = document.querySelectorAll('input, textarea, select');
  
    inputs.forEach(input => {
      // Change background color to yellow when the input is focused
      input.addEventListener('focus', function() {
        input.style.backgroundColor = 'yellow';
      });
  
      // Change background color back to white when the input loses focus
      input.addEventListener('blur', function() {
        input.style.backgroundColor = 'white';
      });
    });
  }
  
  // Function to handle the mouseover event on buttons
  function handleButtonHover() {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      // Change background color to light blue when the mouse is over the button
      button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'lightblue';
      });
  
      // Optional: Revert the background color when the mouse leaves the button
      button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''; // Resets to default or inherited background color
      });
    });
  }
  
  // Initialize the event listeners
  document.addEventListener('DOMContentLoaded', function() {
    handleInputFocusBlur();
    handleButtonHover();
  });
  

