function sortFunction(str) { 

  // true if there are 3 spaces between a and b
  var arr = str.toLowerCase().split("");
  
  for (var i = 0; i < arr.length - 4; i++){
    if (arr[i] === "a" && arr[parseInt(i)+4] === "b"){
      return true;
    }
  }
  return false; 
         
}

var strToTest = "zyxvautobrq";
console.log(sortFunction(strToTest));



/* My paste all solution for coderbyte:
function ABCheck(str) { 

  // code goes here  
  var arr = str.toLowerCase().split("");
  
  for (var i = 0; i < arr.length - 4; i++){
    if (arr[i] === "a" && arr[parseInt(i)+4] === "b"){
      return true;
    }
  }
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(ABCheck(readline()));  
*/