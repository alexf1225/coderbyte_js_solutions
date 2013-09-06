//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 

  // turn str into array
  var arr    = str.split(" ");
  
  for (var i in arr){
    arr[i] = arr[i].split("")
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  return arr.join(" "); 
         
}
   
// My test
var str = "hello world";
console.log(LetterCapitalize(str)); //solution: "Hello World"