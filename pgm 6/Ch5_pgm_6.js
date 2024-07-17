var showSum;
var showProduct;
var showDifference;
var showQuotient;

showSum = function (number1, number2) {
    var total = number1 + number2;
    console.log("The sum is " + total);
};

showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

showQuotient = function (number1, number2) {
    var quotient = number1 / number2;
    console.log("The quotient is " + quotient);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56, 74);

showProduct(4, 7);
showProduct(-3, 10);
showProduct(0.5, 2);

showDifference(10, 5);
showDifference(3.5, 1.5);
showDifference(-8, -2);

showQuotient(10, 2);
showQuotient(15, 3);
showQuotient(7, -2);