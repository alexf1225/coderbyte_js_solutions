//Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str) { 

  // code goes here
  var arr = str.split("");
  for (var i in arr){
    if (/[a-z]/.test(arr[i])){
      arr[i] = arr[i].toUpperCase();
    }else if (/[A-Z]/.test(arr[i])){
      arr[i] = arr[i].toLowerCase();
    }
  }
  var newStr = arr.join("");
  return newStr; 
         
}
   
// My test
var str = "Sup DUDE!!?";
console.log(SwapCase(str)); //solution: "sUP dude!!?"