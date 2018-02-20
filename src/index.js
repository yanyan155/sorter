class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function(a, b) { return a - b};
  }

  add(element) {
    // your implementation
    this.arr.push(element);
    return this.arr;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var indices = indices.sort(function(a, b) { return a - b});
    var filtered = [];
    for (var i = 0; i< indices.length; i++) {
      filtered.push(this.arr[indices[i]]);
    }
    var res = filtered.sort(this.compareFunction);
    for (var i = 0; i< indices.length; i++) {
      this.arr[indices[i]] = filtered[i];
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    if (compareFunction){
      this.compareFunction = compareFunction;
      return compareFunction;
    }
    var res = function(a, b) { return a - b};
    return res;
  }
}
module.exports = Sorter;