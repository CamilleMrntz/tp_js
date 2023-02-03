function char_rot(number, letter) {
  let ascii = letter.charCodeAt(0);
  let char;
  if (ascii >= 65 && ascii <= 90) {
    char = String.fromCharCode(((ascii - 65 + number) % 26) + 65);
  } else if (ascii >= 97 && ascii <= 122) {
    char = String.fromCharCode(((ascii - 97 + number) % 26) + 97);
  }
  if (letter === " ") {
    return " ";
  }
  return char;
}

function cesear(number, sentence) {
  let array = sentence.split("");
  let cryptedArray = array.map((x) => char_rot(number, x));
  return cryptedArray.join("");
}

console.log(cesear(1, "Ave Cesar"));
