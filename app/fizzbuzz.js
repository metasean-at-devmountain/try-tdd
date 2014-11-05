var fizzbuzz = function (number) {

	if (isNaN(number)) return false;                   // if not a number
	
	var self = (number % 3 == 0) ? "fizz" : "";  		// if 3
	self = (number % 5 == 0) ? self += "buzz": self;	// if 5
	self = (self == "") ? number : self;					// if neither 3 or 5

	return self;
};

module.exports = fizzbuzz;