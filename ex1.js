const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

//8790 8987 7777 9007

class Parser {
  constructor(parseCharacter) {
    this.parseCharacter = parseCharacter;
  }
  parse(phrase) {
    const phraseArray = phrase.split(this.parseCharacter);
    const reg = /^[\d\s]+$/;

    const filteredArray = phraseArray.filter((letter) => reg.test(letter));
    const noSpacesArray = filteredArray.map((x) =>
      Array.from(x).filter((letter) => letter !== " ")
    );
    this.str = noSpacesArray.map((array) => array.join(""));
    console.log(noSpacesArray);
  }
}

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
