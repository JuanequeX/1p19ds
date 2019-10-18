class Vector {
    constructor(data) {
      this.data = data;
    }  
    sum(vector) {
      return this.data.map((item, i) => item + vector[i]);
    }
  
    subt(vector) {
      return this.data.map((item, i) => item - vector[i]);
    }
  
    mul(vector) {

      return this.data.map((item, i) => item * vector[i]);
    }
  
    getVector() {
      return this.data;
    }
}
const a = [1, 6, 7, 9, 2, 1];  
const b = [6, 5, 4, 3, 2, 1];
  
const vector = new Vector(a);
console.log("Suma: [ " + vector.sum(b) + " ]");
console.log("Resta: [ " + vector.subt(b)+ " ]");
console.log("Multiplicar: [ " + vector.mul(b)+ " ]");
console.log("Vector a: [ " + vector.getVector()+ " ]");