/*
Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square 
brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

*/


function decodeString(s){
	let regex = /(\d+)\[([a-z]*)\]/gi;
	let result = s.replace(regex, (find, count, str) => str.repeat(count));
	let recall = regex.test(result);
	if(recall){
		return decodeString(result);
	}
	return result;
}

decodeString("4[ab]");
decodeString("2[b3[a]]");