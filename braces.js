//Version 01
function braces(values) {
	let mappedBraces = {
		'{': '}',
		'[': ']',
		'(': ')'
	};

	let closedBraces = {
		'}': true,
		']': true,
		')': true
	};

	let strArr = [];
	let result = [];

	for (let i = 0; i < values.length; i ++ ) {
		valid = true;

		for (let j = 0; j < values[i].length; j ++) {
			let curr = values[i][j];

			if (mappedBraces[curr]) {
				strArr.push(curr);

			} else if (closedBraces[curr]) {
				let x = mappedBraces[strArr.pop()]
				if (x!== curr) {
					result.push('NO');
					valid = false;
					break;
				}
			}
		}

		if(valid) result.push('YES');
	}

	return result;
}


//version 02
function braces(values) {
	let result = [];

	for (let i = 0; i < values.length; i++) {
		if (isBalanced(values[i])) {
			result.push('YES');
		} else {
			result.push('NO');
		}
	}
	return result;
}

function isBalanced(str) {
	let temp = [];
	
	let bracketsMap = new Map();
	bracketsMap.set(']', '[');
	bracketsMap.set('}', '{');
	bracketsMap.set(')', '(');

	var closingBrackets = [...bracketsMap.keys()];
	var openingBrackets = [...bracketsMap.values()];

	for (let i = 0; i < str.length; i++) {

		if (openingBrackets.indexOf(str[i]) > -1) {
			temp.push(str[i]);

		} else if (closingBrackets.indexOf(str[i]) > -1) {

			var expectedBracket = bracketsMap.get(str[i]);

			if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
				return false;
			}

		} else {
			continue;
		}
	}
	return (temp.length === 0);
}
