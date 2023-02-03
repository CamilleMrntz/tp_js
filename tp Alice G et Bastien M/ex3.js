results = [];

const data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];

class Count {
    constructor(arr) {
        this.arr = arr;
        this.obj = {};
    }

    count() {
        // for each element in the array
        for (let i = 0; i < this.arr.length; i++) {
            // check if the element is already in the object
            if (this.obj[this.arr[i]]) {
                // if it is, increment the value
                this.obj[this.arr[i]]++;
            // if it isn't, add it to the object
            } else {
                this.obj[this.arr[i]] = 1;
            }
        }
        return this.obj;
    }
}

// create a new instance of the Count class
const count = new Count(data);

// call the count method of the Count class
const obj = count.count();

// put obj in results array
results = Object.entries(obj);

console.log(results);
