function VowelCount(str) { 

  // code goes here  
  for (var i = 0, vowelCount = 0; i < str.length; i++){
    if (/[aeiou]/.test(str[i].toLowerCase())){vowelCount++};
  }
  return vowelCount; 
     
}


var strToTest = "zeyxvautobrqU";
console.log(VowelCount(strToTest));


/* My paste all solution for coderbyte:
function VowelCount(str) { 

  // code goes here  
  var arr = str.split(""),
      counter = 0,
      filter = /[aeiou]/g;
  
  for (var i in arr){
    if (filter.test(arr[i])){counter++};
  }
  return counter; 
     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(VowelCount(readline()));  */



/* More streamlined code
function VowelCount(str) { 

  // code goes here  
  for (var i = 0, vowelCount = 0; i < str.length; i++){
    if (/[aeiou]/.test(str[i].toLowerCase())){vowelCount++};
  }
  return vowelCount; 
     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(VowelCount(readline()));  
*/