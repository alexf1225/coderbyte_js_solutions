// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
function SimpleSymbols(str) { 
  
  //find positions of letters in string
  var arr = str.split("");
  var position = [];
  var result = true;
  var alphabet = /[a-zA-Z]/;
  
  for (var i in arr){
    if(alphabet.test(arr[i])){
      position.push(i);
    }
  }
  //check if + on both sides of positions
  for (var i in position){
    if (position.length = 0){
      return false
    }
    if (arr[parseInt(position[i])+1] !== "+"  ||  arr[parseInt(position[i])-1] !== "+"){
      return false
    }
  }
  return result; 
}

// My test
var str = "+d+=3=+s+";
console.log(SimpleSymbols(str)); //solution: "true"


/* Non RegEx Solution

function SimpleSymbols(str) { 

  // code goes here  
  //create a filter for alphabet
  var isLetter = function(testChar){
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var arr = alpha.split("");
    for (var i in arr){
      if (testChar === arr[i]){
        return true;
      }
    }
    return  false;
  };
 
  
  
  //find positions of letters in spring
  var arr = str.split("");
  var position = [];
  var result = true;
  
  for (var i in arr){
    if(isLetter(arr[i])){
      position.push(i);
    }
  }

console.log(position);
  if (position[0] = undefined){
      return false
    }//check if + on both sides of positions

  for (var i in position){
    var afterPosition = parseInt(position[i])+1;
    var beforePosition = parseInt(position[i])-1;
    
    if (arr[afterPosition] !== "+"  ||  arr[beforePosition] !== "+"){
      return false
    }
  }
  return result; 
         
}
var str = "++c+++a++"
console.log(SimpleSymbols(str));

/* CoderByte Ready
function SimpleSymbols(str) { 

  // code goes here  
  //create a filter for alphabet
  var isLetter = function(testChar){
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var arr = alpha.split("");
    for (var i in arr){
      if (testChar === arr[i]){
        return true;
      }
    }
    return  false;
  };
 
  
  
  //find positions of letters in spring
  var arr = str.split("");
  var position = [];
  var result = true;
  
  for (var i in arr){
    if(isLetter(arr[i])){
      position.push(i);
    }
  }
  //check if + on both sides of positions
  for (var i = 1; i <= arr.length - 2; i++){
    var before = i-1;
    var after = i+1;
      if ( arr[position[before]] !== "+" || arr[position[after]] !== "+"){
        return false;
      }
  }
  return result; 
        
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleSymbols(readline()));                            

*/















                            
                            
                            
  











                            
                            
                            
  