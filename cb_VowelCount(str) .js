//Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

function VowelCount(str) { 

  // code goes here  
  for (var i = 0, vowelCount = 0; i < str.length; i++){
    if (/[aeiou]/.test(str[i].toLowerCase())){vowelCount++};
  }
  return vowelCount; 
     
}


// My test
var strToTest = "zeyxvautobrqU";
console.log(VowelCount(strToTest)); //solution: 5


/* Prior Solution
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

