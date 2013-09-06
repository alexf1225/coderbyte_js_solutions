//Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
function FirstReverse(str) { 

  // code goes here
  str = str.split("")
           .reverse()
           .join("");
  return str; 
}

//My Test
var str = "coderbyte";
console.log(FirstReverse(str)); //solution: "etybredoc"



/* Solution not using reverse method

function FirstReverse(str) { 
  
  result = [];

  // turn string into an array
  str.split("");
  
  for(var i = str.lenth - 1; i >=0; i--){
    result.push(str.pop())
  }
  
  return result.join("");
         
}
*/