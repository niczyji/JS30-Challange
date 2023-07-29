// Get elements
let spacingInput = document.querySelector('input[name="spacing"]');
let blurInput = document.querySelector('input[name="blur"]');
let baseColorInput = document.querySelector('input[name="base"]');
let root = document.documentElement;

function updateCSSVar(e) {
  let spacingValue = spacingInput.value + "px"; // Append 'px' to the value
  root.style.setProperty("--spacing", spacingValue);

  let blurValue = blurInput.value + "px"; // Append 'px' to the value
  root.style.setProperty("--blur", blurValue);

  let baseValue = baseColorInput.value;
  root.style.setProperty("--base", baseValue);
}

document.addEventListener("change", updateCSSVar);

// Better solution
/* const inputs = document.querySelectorAll(".header input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate)); */
