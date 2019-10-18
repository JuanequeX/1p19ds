class Matrix {
    constructor(row, columns) {
      this.row = row;
      this.columns = columns;
      this.data = this.init();
    }
  
    init() {
      const temp = [];
  
      for (let i = 0; i < this.row; i++) {
        temp[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          temp[i][j] = 0;
        }
      }
  
      return temp;
    }
  
    initRandom() {
      for (let i = 0; i < this.row; i++) {
        this.data[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          this.data[i][j] = (Math.round (Math.random () * 10));
        }
      }
  
      return this.data;
    }
  
    getRow(r) {
      if (r > this.row) {
        return console.log("//ERROR: Fila fuera del rango de la Matrix");
      }
  
      return this.data[r];
    }
  
    getColumn(c) {
      const temp = [];
  
      if (c > this.columns) {
        return console.log("//ERROR: Fila fuera del rango de la Matrix");
      }
  
      for (let i = 0; i < this.row; i++) {
        temp.push(this.data[i][c]);
      }
  
      return temp;
    }
  
    isSquared() {
      if (this.columns === this.row) {
        return true;
      }
  
      return false;
    }
  
    isSymmetric() {
      this.isSquared();
  
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (this.data[i][j] != this.data[j][i]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    isIdentity() {
      this.isSymmetric();
  
      for (let i = 0; i < this.row; i++) {
        if (this.data[i][i] !== 1) {
          return false;
        }
      }
  
      return true;
    }
  
    getMatrix() {
      return this.data;
    }
  }

  (function UseMatri(){
    h = new Matrix(6,8)
    console.log(h.init())
    console.log(h.initRandom())
    console.log(h.isSquared())
    console.log(h.isSymmetric())
    console.log(h.isIdentity())

  })()