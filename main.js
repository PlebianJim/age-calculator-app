function calculateAge(event) {
  // Check if the key pressed is the return or enter key
  if (event.key === "Enter") {
    // Trigger a click on the image element
    document.querySelector(".image-div-img").click();
  }
}

function validateInput() {
  // Retrieve the input values
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  // Validate the input fields
  let isValid = true;

  if (
    dayInput.value === "" ||
    isNaN(dayInput.value) ||
    dayInput.value < 1 ||
    dayInput.value > 31
  ) {
    dayInput.classList.add("invalid-input");
    dayInput.nextElementSibling.textContent = "Please enter a valid day (1-31)";
    isValid = false;
  } else {
    dayInput.classList.remove("invalid-input");
    dayInput.nextElementSibling.textContent = "";
  }

  if (
    monthInput.value === "" ||
    isNaN(monthInput.value) ||
    monthInput.value < 1 ||
    monthInput.value > 12
  ) {
    monthInput.classList.add("invalid-input");
    monthInput.nextElementSibling.textContent =
      "Please enter a valid month (1-12)";
    isValid = false;
  } else {
    monthInput.classList.remove("invalid-input");
    monthInput.nextElementSibling.textContent = "";
  }

  if (yearInput.value === "" || isNaN(yearInput.value)) {
    yearInput.classList.add("invalid-input");
    yearInput.nextElementSibling.textContent = "Please enter a valid year";
    isValid = false;
  } else {
    yearInput.classList.remove("invalid-input");
    yearInput.nextElementSibling.textContent = "";
  }

  if (!isValid) {
    return;
  }

  // Calculate the user's age
  const currentDate = new Date();
  const birthDate = new Date(
    yearInput.value,
    monthInput.value - 1,
    dayInput.value
  );
  const ageInMilliseconds = currentDate - birthDate;

  // Convert milliseconds to years, months, and days
  const ageDate = new Date(ageInMilliseconds);
  const ageInYears = Math.abs(ageDate.getUTCFullYear() - 1970);
  const ageInMonths = ageDate.getUTCMonth();
  const ageInDays = ageDate.getUTCDate() - 1;

  // Update the result elements
  document.getElementById("injected-year").textContent = ageInYears;
  document.getElementById("injected-month").textContent = ageInMonths;
  document.getElementById("injected-day").textContent = ageInDays;
}

// Attach the calculateAge function to the keydown event of the input fields
document.getElementById("day").addEventListener("keydown", calculateAge);
document.getElementById("month").addEventListener("keydown", calculateAge);
document.getElementById("year").addEventListener("keydown", calculateAge);

// Attach the validateInput function to the blur event of the input fields
document.getElementById("day").addEventListener("blur", validateInput);
document.getElementById("month").addEventListener("blur", validateInput);
document.getElementById("year").addEventListener("blur", validateInput);
