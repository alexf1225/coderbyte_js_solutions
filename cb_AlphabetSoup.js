//Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

var sortFunction = function(str){
  var arr = str.split(""), 
      sorting = true, 
      temp;

  while (sorting){
    sorting = false
    for (var i = 0; i <= arr.length-2; i++){
      if(arr[i+1] < arr[i]){
        //code to swap positions
        temp =  arr[i];
        arr[i] = arr[i+1];
        arr[i+1] =  temp;
        //flag to repeat if this swap happened
        sorting = true;
      }
    }
  }

  return arr.join("")
};

var strToSort = "coderbyte";
console.log(sortFunction(strToSort)); //solution: "bcdeeorty"

