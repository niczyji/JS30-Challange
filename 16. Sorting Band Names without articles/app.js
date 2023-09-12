const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const ulElement = document.getElementById("bands");

// Function to remove leading words like 'the', 'a', 'an' from band names
function strip(bandName) {
  // Use a regular expression to identify leading words
  let regex = /^(an |a |the )/i;
  // Remove the leading words and trim the string
  return bandName.replace(regex, "").trim();
}

// Sort the bands array
const sortedBands = bands.sort(function (a, b) {
  // Compare the 'stripped' band names
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});

// Update the HTML element with the sorted band names
// Use `map` and `join` to create an HTML list
ulElement.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
