class findMax {
    constructor(a, b, c) {
      this._a = a;
      this._b = b;
      this._c = c;
    }
  
    get max() {
      const arrayNum = [this._a, this._b, this._c];
      return arrayNum.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
    }
  
    set a(a) {
      this._a = a;
    }
    set b(b) {
      this._b = b;
    }
    set c(c) {
      this._c = c;
    }
  }
  
  const numbers = new findMax(30, 45, 20);
  console.log(numbers.max);
  
  numbers.a = 100;
  console.log(numbers.max);