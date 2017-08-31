"use strict"

class Calculator{

	sum(a,b){
		return +a + +b
	}

	subtract(a,b){
		return +a - +b
	}

	times(a,b){
		return +a * +b
	}

}

exports.Calculator = Calculator