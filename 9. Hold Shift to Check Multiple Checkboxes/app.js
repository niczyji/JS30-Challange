// Select all input elements with the class "item" and type "checkbox"
const items = document.querySelectorAll(".item input[type='checkbox']");

// Variable to store the last checked checkbox element
let lastChecked;

// Function to handle checkbox click and selection
function handleCheck(e) {
  let inBetween = false; // Flag variable to determine if we are in between two selected elements

  // If the shift key is pressed and this checkbox is checked
  if (e.shiftKey && this.checked) {
    items.forEach((checkbox) => {
      // If the current checkbox is the same as the current checkbox being clicked or the last checked checkbox
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      // If we are in between two selected elements
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // Check if Shift is pressed and the checkbox is unchecked
  else if (e.shiftKey && !this.checked) {
    items.forEach((checkbox) => {
      // Check if it's the current or the last checked checkbox
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      // Uncheck all the boxes between the two points
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }

  // Update lastChecked to store the currently clicked checkbox
  lastChecked = this;
}

// Add a click event listener to each checkbox element to handle the click behavior
items.forEach((item) => item.addEventListener("click", handleCheck));
