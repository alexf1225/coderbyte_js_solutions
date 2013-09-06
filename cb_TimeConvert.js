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

// My test
console.log(TimeConvert(126)); //solution: "2:6"