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

function strip(bandName) {
  let regex = /^(an |a |the )/i;
  return bandName.replace(regex, "").trim();
}

const sortedBands = bands.sort(function (a, b) {
  if (strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});

ulElement.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
