/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var divideNum = function (num, primeFactors) {
		for (i = 2; i <= num^0.5; i++){
			if ((num / i) % 1 === 0){
				while ((num / i) % 1 === 0) {
					num = num / i;
				}
				primeFactors.push(i);
				if (num === 1) { 
					return true;
				}
			}
		}
		return false
	},
	i,
	j,
	math = require('mathjs'),
	primeFactors = [],
	x = divideNum(600851475143, primeFactors);

console.log('Prime Factors');

console.log(primeFactors);

// By T. Mihai Tiuca