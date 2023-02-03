class Parser {
  constructor(phrase) {
    this.phrase = phrase;
  }

  parse(phrase) {
    this.str = phrase.replace(/\D/g,'');
  }
}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
