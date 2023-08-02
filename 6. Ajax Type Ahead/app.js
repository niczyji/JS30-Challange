const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => cities.push(...data))
  .catch((err) => console.log(err));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `<li>
      <span class="name">
        ${cityName}, ${stateName}
      </span>
      <span class="population">
      ${numberWithCommas(place.population)}
    </span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

const input = document.querySelector(".search-input");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);
