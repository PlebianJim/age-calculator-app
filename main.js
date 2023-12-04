function calculateAge() {
    // Retrieve the input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    // Calculate the user's age
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    const ageInMilliseconds = currentDate - birthDate;
  
    // Convert milliseconds to years, months, and days
    const ageDate = new Date(ageInMilliseconds);
    const ageInYears = Math.abs(ageDate.getUTCFullYear() - 1970);
    const ageInMonths = ageDate.getUTCMonth();
    const ageInDays = ageDate.getUTCDate() - 1;
  
    // Update the result elements
    document.getElementById('injected-year').textContent = ageInYears;
    document.getElementById('injected-month').textContent = ageInMonths;
    document.getElementById('injected-day').textContent = ageInDays;
  }
  
  // Attach the calculateAge function to the onclick event of the image element
  document.querySelector('.image-div-img').onclick = calculateAge;