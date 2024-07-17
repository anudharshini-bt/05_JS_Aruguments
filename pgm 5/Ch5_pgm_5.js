var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
  var result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

cube = function (numberToCube) {
  var result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " cubed = " + result);
};

squareRoot = function (numberToRoot) {
  var result = Math.sqrt(numberToRoot);
  console.log("The square root of " + numberToRoot + " is " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

cube(3);   
cube(-5);  
cube(0);   
cube(1.5); 

squareRoot(9);   
squareRoot(25);  
squareRoot(144); 
