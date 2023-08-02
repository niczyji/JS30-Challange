const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
  { name: "Angel", year: 1999 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Great post!", id: 839283 },
  { text: "Very helpful, thanks!", id: 383838 },
  { text: "I totally agree with this.", id: 727272 },
  { text: "This made my day!", id: 192919 },
];

//Some and every Checks
//array.prototype.some() //is at least one person 19?
const personIsAdult = people.some((person) => {
  const year = new Date().getFullYear();
  return year - person.year >= 19 ? true : false;
});

console.log({ personIsAdult });

//Array.prototype.every() //ist everyone 19?
const everyoneIsAdult = people.every((person) => {
  const year = new Date().getFullYear();
  return year - person.year >= 19 ? true : false;
});

console.log({ everyoneIsAdult });

//Array.prototype.find()
//Find is like filtern, but instead retunts just the one you are looking for
//Find the comment with ID 727272
const comment = comments.find((comment) => {
  return comment.id === 727272 ? true : false;
});

console.log(comment);

//Array.prototype.findIndex()
//Find the comment with this ID
//Delete the comment with the id of 727272
const indexComment = comments.findIndex((comment) => {
  return comment.id === 727272 ? true : false;
});

const newComments = [
  ...comments.slice(0, indexComment),
  ...comments.slice(indexComment + 1),
];

console.log(newComments);
