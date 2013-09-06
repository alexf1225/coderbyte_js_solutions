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
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SwapCase(readline()));   