class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter(){
    let perimeter ;
    perimeter=this.sides*2 + this.sideLength*2;
    console.log ("perimeter of square is   " + perimeter);
  }
}
var square = new Shape("square", 4, 5);
square.calcPerimeter();
var triangle= new Shape("triangle", 3,3);
triangle.calcPerimeter();
