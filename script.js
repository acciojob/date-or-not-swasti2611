var isDate = function (input) {
  //   write your code here
	let newinput=parse.Date(input);
	if(typeof newinput===object){
		return true;
	}else{
		return false;
	}
// Do not change the code below.
const input= prompt("Enter Date.");
alert(isDate(input));
	
