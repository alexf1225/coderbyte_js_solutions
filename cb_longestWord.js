//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
  //filter out nonsense characters with regex, turn sentence into an array of words
  var arr = sen.match(/[a-zA-Z ]/g).join("").split(" ");

  //find longest word
  var longestWord = arr[0]
  for ( var i = 0; i < arr.length - 1; i++){
    if (arr[i+1].length > longestWord.length){
      longestWord = arr[i+1];
    }
  }
  return longestWord; 
         
}

//My Test
var sen = "###ace %%%%%JOIN abracadabra";
console.log(LongestWord(sen)); //solution: "abracadabra"


  /*Solutionn Not using RegEx

  var isAlphabet = function(testChar){
    var   alphabetText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
          alphaArr     = alphabetText.split(""),
          result       = false;
    for (var i in alphaArr){
            //look for a match, then return true
            if (testChar === alphaArr[i]){
              result = true;
            }
    }
    return result;
  }; 


  var remStrangeText = function (str){
    var arr    = str.split(""),
        result = "";

    for (var i in arr){
      if (isAlphabet(arr[i])){
        result += arr[i];
      }
    }
    return result;
  };

function LongestWord(sen) { 

  // code goes here 
  // split the sentence into an array of words
  var arr = sen.split(" ");
  //clean up each array element of strangetext
  for (i in arr){
    arr[i] = remStrangeText(arr[i])
  }
  //find the longest word
  var longestWord = arr[0];
  for (var i in arr){
    if (arr[i].length > longestWord.length){
      longestWord = arr[i];
    }
  }
  sen = longestWord
  return sen; 
}
*/



/* shortest solution that can be entered in coderbyte
function LongestWord(sen) { 

  // code goes here
  //remove weird stuff
  var arr = sen.match(/[a-zA-Z ]/g).join("").split(" ");


    
  //find longest word
  var longestWord = arr[0]
  for ( var i = 0; i < arr.length - 1; i++){
    if (arr[i+1].length > longestWord.length){
      longestWord = arr[i+1];
    }
  }
  return longestWord; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LongestWord(readline())); 
*/




/*  First Solution that can be entered in Coderbyte

function LongestWord(sen) {

  //create a filter
  var isLetter = function(testChar){
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    var arr = alpha.split("");
    for (var i in arr){
      if (testChar === arr[i]){
        return true;
      }
    }
    return  false;
  };

  //filter out non alphabet
  var arr = sen.split("");
  var newSen = '';//result of filtering
  for(var i in arr){
    if (isLetter(arr[i])){
      newSen += arr[i];
    }
  }

  //split the words and look for longest
  newSen = newSen.split(" ");
  longestWord = newSen[0];

  for (var i in newSen){
    if (newSen[i].length > longestWord.length){
      longestWord = newSen[i];
    }
  }

  return longestWord; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LongestWord(readline()));                            
*/    
                
  