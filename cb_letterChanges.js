

var letterChanges = function(str){
  //function to confirm if myChar is a vowel
  var isVowel = function(myChar){
    var vowel  = ["a","e","i","o","u"],
        result = false;
    for (var i in vowel){
      if(myChar === vowel[i]){
        result = true;
      }
    }
    return result;
  };
  //function that returns the nextLetter (does not handle special cases, see coderbyte code)
  var nextLetter = function(myChar){
    var newCharCode = myChar.charCodeAt(0) + 1
    return myChar.replace(/([a-zA-Z])/, String.fromCharCode(newCharCode))
  };



  //split the input string into an array
  var arr  = str.split(""),
    result = "";
  //evaluate each and convert to next letter
  for (var i in arr){ 
    if (arr[i] !== " "){
      result += nextLetter(arr[i]);
    }else{
      result += " ";
    }
  }
  //review the final and capitalize vowels
  result = result.split("")

  for (var i in result){ 
    if (isVowel(result[i])=== true){
      result.splice(i,1,result[i].toUpperCase())
    }
  }
  str = result.join("");
  return str; 
};

str = "fun times!#";
console.log(letterChanges(str));

/* My Latest Readable Regex Version
function LetterChanges(str) { 

  // code goes here
  var arr = str.split(""),
      newStr = "";
  
  for (var i in arr){
    if (/[a-yA-Y]/.test(arr[i]))          {arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+1)}
    if (/[aeiou]/.test(arr[i]))           {arr[i] = arr[i].toUpperCase()}
    if (arr[i] === "Z" || arr[i] === "z") {arr[i] = "A"}
  }
  
  newStr = arr.join("");
  return newStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterChanges(readline()));  
*/




/* Raw Stuff to enter in coderbyte
function LetterChanges(str) { 

  // code goes here 
  //function to confirm if myChar is a vowel
  var isVowel = function(myChar){
    var vowel  = ["a","e","i","o","u"],
        result = false;
    for (var i in vowel){
      if(myChar === vowel[i]){
        result = true;
      }
    }
    return result;
  };
  //function that returns the nextLetter
  var nextLetter = function(myChar){
    return myChar.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c = a.charCodeAt(0);
        switch(c){
            //wraps A after Z and a after z
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
  }
      
  //split the input string into an array
  var arr  = str.split(""),
    result = "";
  //evaluate each and convert to next letter
  for (var i in arr){ 
    if (arr[i] !== " "){
      result += nextLetter(arr[i]);
    }else{
      result += " ";
    }
  }
  //review the final and capitalize vowels
  result = result.split("")

  for (var i in result){ 
    if (isVowel(result[i])=== true){
      result.splice(i,1,result[i].toUpperCase())
    }
  }
  str = result.join("");
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterChanges(readline()));  
*/

/* Another version w/ Regex

function LetterChanges(str) { 

  // code goes here 
  //filter to check for letter
  var isLetter = function(testChar){
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var arr = alpha.split("");
    for (var i in arr){
      if (testChar === arr[i]){
        return true;
      }
    }
    return  false;
  };
  //redo str w/o weird characters
  var strArr = str.split(""),
      finalStr = "",
      newCharCode = 0;
  for (var i in strArr){
    if (isLetter(strArr[i])){
      newCharCode = strArr[i].charCodeAt(0) + 1;
      finalStr += String.fromCharCode(newCharCode);
    }else{
      finalStr += strArr[i];
    }
  }
  //capitalize vowels
  var semi = finalStr.split("");
  var str2 = "";
    for (var i in semi){
      if (semi[i] === "a" || semi[i] === "e" || semi[i] === "i" || semi[i] === "o" || semi[i] === "u"){
        semi[i] = semi[i].toUpperCase();
      }
    }
    str2 = semi.join("");
  return str2;    
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LetterChanges(readline()));                            

*/