function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;

}
  Shape.prototype.calcPerimeter= function(){
    let perimeter ;
    perimeter= this.sides*2 + this.sideLength*2;
    console.log ("perimeter of square is   " + perimeter);
  };


square = new Shape("square", 4, 5);
square.calcPerimeter();
triangle= new Shape("triangle", 3,3);
triangle.calcPerimeter();
