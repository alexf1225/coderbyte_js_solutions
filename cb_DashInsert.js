function DashInsert(num) { 

  // code goes here  
  var result = "",
      arr = num.toString().split("");
  for (var i = 0, len = arr.length; i < len; i++){
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0){
      result += arr[i] + "-";
    }else{
      result += arr[i];
    }
  }
  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(DashInsert(readline()));                            


/*Using the JavaScript language, have the function DashInsert(num) insert dashes ('-') 
between each two odd numbers in num. For example: if num is 454793 the output should be 
4547-9-3. Don't count zero as an odd number. */
