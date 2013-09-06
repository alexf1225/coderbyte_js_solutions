//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) { 

  // initial value
  var result = 0;

  for (var i = 0; i <= num; i++){
    result += i;
  }
  
  return result; 
         
}
   
// My test
console.log(SimpleAdding(5)); //solution: 15