function FirstFactorial(num) { 

  // code goes here
  var result = 1;
  for (var i = num; i >= 2; i--){
  	result *= i;
  }
  num = result;
  return num; 
         
}
  

//My Test
var num = 8;
console.log(FirstFactorial(num));