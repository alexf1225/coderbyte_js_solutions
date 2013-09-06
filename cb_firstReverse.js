function FirstReverse(str) { 

  // code goes here
  str = str.split("")
           .reverse()
           .join("");
  return str; 
         
}
//My Test
var str = "coderbyte"
console.log(FirstReverse(str))



/* As entered on Coderbyte.comp

function FirstReverse(str) { 

  // code goes here
  str.split("");
  result = []
  for(var i = str.lenth - 1; i >=0; i--){
    result.push(str.pop())
  }
  result.join("")
  return result;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(FirstReverse(readline()));      
*/