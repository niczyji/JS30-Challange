const pressed = [];
const secredCode = "code";

window.addEventListener('keyup', (e)=> {
  pressed.push(e.key);
  pressed.splice(-secredCode.length - 1, pressed.length - secredCode.length)
  if (pressed.join('').includes(secredCode)) {
    console.log("match");
    cornify_add();
  }
  console.log(pressed);
})