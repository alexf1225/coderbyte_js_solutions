var sortFunction = function(str){
  var arr = str.split(""), 
      sorting = true, 
      temp;

  while (sorting){
    sorting = false
    for (var i = 0; i <= arr.length-2; i++){
      if(arr[i+1] < arr[i]){
        temp =  arr[i];
        arr[i] = arr[i+1];
        arr[i+1] =  temp;
        sorting = true;
      }
    }
  }

  return arr.join("")
};

var strToSort = "zyxvutsrq";
console.log(sortFunction(strToSort));








/* My paste all solution for coderbyte:
function AlphabetSoup(str) { 

  // code goes here 
  var arr = str.split(""),
      result = "",
      swapped = true,
      temp = 0;
  
  while (swapped === true){
    swapped = false
    for (var i in arr){
      if (arr[parseInt(i)+1] < arr[i]){
        //code to swap positions
        temp = arr[i];
        arr[i] = arr[parseInt(i)+1];
        arr[parseInt(i)+1] = temp;
        //flag to repeat if this swap happened
        swapped = true
      }
    }
  }
  
  result = arr.join("");
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(AlphabetSoup(readline()));  
*/   