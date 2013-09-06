function SimpleAdding(num) { 

  // code goes here 
  var result = 0;
  for (var i = 0; i <= num; i++){
    result += i;
  }
  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleAdding(readline()));  