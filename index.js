"use strict"

const calc = require('./math')

const readline = require('readline');

function completer(line) {
	const completions = ['soma', 'subtrair','multiplicar'];
	const hits = completions.filter((c) => c.startsWith(line));
	return [hits.length ? hits : completions, line];
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	completer: completer
});

let oCalculator = new calc.Calculator()

let a, b, operador;


rl.question('a:', (a) => {
	a = a

	rl.question('operador:', (operador) => {
		operador = operador

		rl.question('b:', (b) => {

			b = b

			switch(operador){
				
				case "+":
				case "soma":
				console.log(oCalculator.sum(a,b));
				break;

				case "-":
				case "subtrair":
				console.log(oCalculator.subtract(a,b));
				break;
				case "multiplicar":
				console.log(oCalculator.times(a,b));
				break;
				case "/":
				console.log(oCalculator.divide(a,b));
				break;

			}

			rl.close()
		});


	});

});


