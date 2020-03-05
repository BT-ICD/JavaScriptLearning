var fnAddition = function (num1, num2) {
    return num1 + num2;
};
var ans = fnAddition(10, 20);
console.log("Sum is :" + ans);
var logMessage = function () { return console.log("Hello Arrow Function without argument"); };
logMessage(); //Called Arrow Function
var logData = function (data) {
    console.log("When function has one argument no parenthesis required for arrow function");
    console.log("Argument passed by user: " + data);
};
logData("We will do it");
