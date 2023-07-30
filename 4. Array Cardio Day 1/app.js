inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Thomas", last: "Edison", year: 1847, passed: 1931 },
  { first: "Nikola", last: "Tesla", year: 1856, passed: 1943 },
  { first: "Alexander", last: "Graham Bell", year: 1847, passed: 1922 },
  { first: "James", last: "Watt", year: 1736, passed: 1819 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Gutenberg", year: 1398, passed: 1468 },
  { first: "Leonardo", last: "da Vinci", year: 1452, passed: 1519 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
];

const people = [
  "Amerigo, Vespucci",
  "Bartolomeu, Dias",
  "Christopher, Columbus",
  "David, Livingstone",
  "Edmund, Hillary",
  "Ferdinand, Magellan",
  "Francisco, Pizarro",
  "Fridtjof, Nansen",
  "George, Everest",
  "Giovanni da, Verrazzano",
  "Gonçalo, Coelho",
  "Hans, Egede",
  "Henry, Hudson",
  "Hernán, Cortés",
  "Hernando de, Soto",
  "Hiram, Bingham",
  "Ibn, Battuta",
  "Jacques, Cartier",
  "James, Cook",
  "Jean-François de, La Pérouse",
  "Johann Ludwig, Burckhardt",
  "John, Cabot",
  "John, Franklin",
  "John, Hanning Speke",
  "Juan, Ponce de León",
  "Leif, Erikson",
  "Marco, Polo",
  "Martin, Waldseemüller",
  "Matthew, Flinders",
  "Mungo, Park",
  "Neil, Armstrong",
  "Pedro Álvares, Cabral",
  "Pedro de, Valdivia",
  "Peter, Aufschnaiter",
  "Pierre, Gaultier de Varennes et de La Vérendrye",
  "Roald, Amundsen",
  "Robert, Falcon Scott",
  "Robert, Peary",
  "Samuel de, Champlain",
  "Sven, Hedin",
  "Vasco da, Gama",
  "Vasco, Núñez de Balboa",
  "Vitus, Bering",
  "Wilfred, Thesiger",
  "Yermak, Timofeyevich",
  "Zheng, He",
];

//1. Filter the list of inventors for those who were born in the 1800
const bornIn1800 = inventors.filter(
  (inventor) => inventor.year >= 1800 && inventor.year <= 1900
);
/* console.table(bornIn1800); */

//2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map((map) => map.first + " " + map.last);
/* console.table(firstAndLast); */

//3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
/* console.table(oldestToYoungest); */

//4. How many Years did all the inventors live?
const investorsTotalAge = inventors.reduce(function (total, investor) {
  return total + investor.passed - investor.year;
}, 0);
/* console.log(investorsTotalAge); */

//5. Sort the inventors by years lived
const sortInvestorsByAge = inventors.sort(function (a, b) {
  let investorA = a.passed - a.year;

  let investorB = b.passed - b.year;

  if (investorA > investorB) {
    return 1;
  } else {
    return -1;
  }
});
/* console.table(sortInvestorsByAge); */

//6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
//7. Sort exercise,  Sort the people alphabetically by last name
//8. Reduce exercise, Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",mw-category
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
