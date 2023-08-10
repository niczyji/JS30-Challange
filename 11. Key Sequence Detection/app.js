const pressed = [];
const secredCode = "k0d3";

window.addEventListener('keyup', (e)=> {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
})