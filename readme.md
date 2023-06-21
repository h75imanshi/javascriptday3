# JAVA SCRIPT INTERVIEW QUESTION DAY 3

## Question. 1 What are promises and why do we need them?
 - Promise are use to handle async operation in JS. easy to handle callback hell, also use to handle the error.
-      basically in promise there are Three stage
         1. Pending
        2. Resolve - (then method)
        3. reject - (catch mentod)
    - initial stage of any promise is always pending.
 ## Question. 2 What is promise chaining
 Promise chaining is basically several asynchronous function calls and executing them in a synchronized manner one after another using. then() method.
 
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
 
 ## Question. 3 What is the DOM?
    The DOM defines a standard for accessing documents:

"The Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The  DOM standard is separated into 3 different parts:

    Core DOM - standard model for all document types 
    XML DOM - standard model for XML documents

    HTML DOM - standard model for HTML documents

     Different method in DOM
      - Id - getElementById - return unique value
      - querySelector -       return unique value    
      - Class - getElementsByClassName 
      - tag Name - getElementsByTagName
      - querySelectorAll 

    - addEventListener - event, callback function
## Question. 4 What are closures? Give an example of closure
 A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable. In JavaScript, every time a closure is created with the creation of a function.

The closure has three scope chains listed as follows:

     Access to its own scope.
    Access to the variables of the outer function.
    Access to the global variables.


for example

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

## Question. 5 What are objects in javascript?  
Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type.

## Creating new objects
You can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object by invoking that function with the new operator.


  ###  Using object initializers
  Object initializers are also called object literals. "Object initializer" is consistent with the terminology used by C++.

    const obj = {
      property1: value1, // property name may be an identifier
        2: value2, // or a number
      "property n": value3, // or a string
     };

