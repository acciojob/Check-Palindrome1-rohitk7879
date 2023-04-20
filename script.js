// complete the given function

function palindrome(str){
	str = str.toLowerCase().trim();
	let i =0;
	let j = str.length-1;

	while(i <= j){
		let start = str.charAt(i);
		let end = str.charAt(j);
		
		if(start == ' '){
			i++;
		}else if( end == ' '){
			j--;
		}
		else if(start == end){
			i++;
			j--;
		}else{
			return false;
		}
	}
	return true;
}
module.exports = palindrome
