// answer1//
let a =10;
let b=10;
console.log(a==b); // true
console.log(a===b); // false


// answer2//
// var example
var x = 10;
if (true) {
  var x = 20;
}
console.log(x); // outputs 20

// let example
let y = 10;
if (true) {
  let y = 20;
}
console.log(y); // outputs 10

// const example
const z = 10;
// z = 20; // throws an error
console.log(z); // outputs 10

// answer3//
console.log(ab);
let ab= 10;
abc();
function abc()
{
    console.log("Section ....");
}


// answer8//
function getUserData(userId, callback) {
    const userData = { name: "abc", age: 20, email: "xyz@example.com" };
    callback(userData);
  }
  
  // Define a callback function to process the user data
  function processUserData(userData) {
    console.log("Name:", userData.name);
    console.log("Age:", userData.age);
    console.log("Email:", userData.email);
  }
  
  getUserData(123, processUserData);
 
  // answer9//
  const add = function(x, y) {
    return x + y;
  }
  
  // passing a function as an argument to another function
  function calculate(operation, x, y) {
    return operation(x, y);
  }
  
  const result = calculate(add, 2, 3);
  
  console.log(result);
  

  // answer10//
  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);



  //answer11//

  const varPromise = new Promise((resolve, reject) => {
    if(false){
resolve('This is New Promise One')
}  
else{
reject("Promise Rejected")
}
})

function funcPromise(){
return new Promise((res, rej) => {
setTimeout(() => {
res('Promise resolve')
})
})
}

Promise.all([varPromise, funcPromise()])
.then((data)=> console.log(data))
.catch((err) => console.log(err))

//answer13//
function fun(a)  
{  
function innerfun(b){  
return a*b;  
}  
return innerfun;  
}  
var output = fun(4);  
document.write(output(4));  
document.write(" ");  
document.write(output(5));