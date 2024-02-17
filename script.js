var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date || (typeof input === 'string' && !isNaN(Date.parse(input)))) {
        return true;
    }
    // Otherwise, return false
    return false;
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
