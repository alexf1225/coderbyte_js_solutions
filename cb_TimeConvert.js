function TimeConvert(num) { 

  // code goes here 
  var hours = 0;
  var minutes = 0;
  
  hours = num >= 60 ? parseInt(num / 60) : 0;
  minutes =  num >= 60 ? (num % 60) : num;
  
  return hours + ":" + minutes;
         
}

var time = 60;
console.log(TimeConvert(time));

/* Coderbyte PasteAll
function TimeConvert(num) { 

  // code goes here 
  var hours = 0;
  var minutes = 0;
  
  hours = num >= 60 ? parseInt(num / 60) : 0;
  minutes =  num >= 60 ? (num % 60) : num;
  
  return hours + ":" + minutes;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(TimeConvert(readline()));                            
*/