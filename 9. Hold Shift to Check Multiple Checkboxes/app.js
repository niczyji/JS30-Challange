// Select all input elements with the class "item" and type "checkbox"
const items = document.querySelectorAll(".item input[type='checkbox']");

// Variable to store the last checked checkbox element
let lastChecked;

// Function to handle checkbox click and selection
function handleCheck(e) {
  let inBetween = false; // Flag variable to determine if we are in between two selected elements

  // If the shift key is pressed and this checkbox is checked
  if (e.shiftKey && this.checked) {
    // Loop through all the checkboxes
    items.forEach((checkbox) => {
      // If the current checkbox is the same as the current checkbox being clicked or the last checked checkbox
      if (checkbox === this || checkbox === lastChecked) {
        // Toggle the inBetween flag to determine if we are in between the two selected elements
        inBetween = !inBetween;
      }
      // If we are in between two selected elements
      if (inBetween) {
        // Set the checked property of the checkbox to true to select it
        checkbox.checked = true;
      }
    });
  }

  // Update lastChecked to store the currently clicked checkbox
  lastChecked = this;
}

// Add a click event listener to each checkbox element to handle the click behavior
items.forEach((item) => item.addEventListener("click", handleCheck));
