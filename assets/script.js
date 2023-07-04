const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Perform validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value.trim();
      const age = document.getElementById('age').value.trim();
      const gender = document.getElementById('gender').value.trim();
      const date = document.getElementById('date').value.trim();
      const color = document.getElementById('color').value.trim();
      
      // Clear previous error messages
      const errorElements = document.getElementsByClassName('error');
      Array.from(errorElements).forEach(function(element) {
        element.textContent = '';
      });
      
      // Validate each field
      let isValid = true;
      
      if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
      }
      
      if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
      } else if (!isValidEmail(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        isValid = false;
      }
      
      if (phone === '') {
        document.getElementById('phone-error').textContent = 'Phone number is required';
        isValid = false;
      }
      
      if (password === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
      }
      
      if (age === '') {
        document.getElementById('age-error').textContent = 'Age is required';
        isValid = false;
      } else if (isNaN(age) || age < 18) {
        document.getElementById('age-error').textContent = 'Age must be a number and at least 18';
        isValid = false;
      }
      
      if (gender === '') {
        document.getElementById('gender-error').textContent = 'Gender is required';
        isValid = false;
      }
      
      if (date === '') {
        document.getElementById('date-error').textContent = 'Date is required';
        isValid = false;
      }
      
      if (color === '') {
        document.getElementById('color-error').textContent = 'Favorite color is required';
        isValid = false;
      }
      
      if (isValid) {
        // Show success message and clear form
        successMessage.style.display = 'block';
        form.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
          successMessage.style.display = 'none';
        }, 3000);
      }
    });
    
    function isValidEmail(email) {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }