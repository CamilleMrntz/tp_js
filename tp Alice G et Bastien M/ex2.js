class Max {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  get result() {
  return this.maximum();
  }

  maximum() {
    const arrayNum = [this.a, this.b, this.c]
    return arrayNum.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
  }
}

const compare = new Max(2, 3, 5);

console.log(compare.result);
