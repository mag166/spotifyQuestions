/*
Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order 
they occur in the string t. You can assume t will not have repetitive characters. 
For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg" 
*/


function sortByString(s, t){
    let sArray = s.split("");
    let tArray = t.split("");
    let output = [];
    for (let i = 0; i < tArray.length; i++){
      for (let j = 0; j < sArray.length; j++){
        if (tArray[i] === sArray[j]){
          output.push(sArray[j])
        }
      }
    }
    return output.join("");
  }