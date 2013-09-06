function LetterCapitalize(str) { 

  // code goes here
  var arr    = str.split(" ");
  
  for (var i in arr){
    arr[i] = arr[i].split("")
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  return arr.join(" "); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterCapitalize(readline()));  