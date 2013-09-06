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

var words = "racecar"
console.log(Palindrome(words))