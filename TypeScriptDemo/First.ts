let fnAddition = (num1: number, num2 :number ) : number =>{
    return num1+num2;
}
let ans = fnAddition(10,20);
console.log("Sum is :" + ans );

let logMessage = ()=>console.log("Hello Arrow Function without argument");
logMessage(); //Called Arrow Function

let logData = data => {
    console.log("When function has one argument no parenthesis required for arrow function");
    console.log("Argument passed by user: " + data);
}
logData("We will do it");