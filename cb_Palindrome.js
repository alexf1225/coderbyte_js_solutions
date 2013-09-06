//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 

  // code goes here 
  var arr = str.match(/[a-zA-Z]/g),
      last = arr.length -1 ,
      half = parseInt(arr.length/2);

  for (var i = 0; i<= half; i++){
    if (arr[i] !== arr[last - i]){
      return false;
    }
  }  
  return true; 
         
}

// My test
var words = "racecar"
console.log(Palindrome(words)) //solution: true