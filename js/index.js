// ================= 1 hw ========================
const fSayHello = (name) => {
	if (typeof name === 'string') {
		if (name == "Mark") {
			return `I love u, ${name}!`;
		}
		return `Hello, ${name}!`;
	}
	return `${name} is not a string`;
};

// function fSayHello (name) {
// if (typeof name === 'string') {
// 	if (name == "Mark") {
// 		return `I love u, ${name}`;
// 	}
// 	return `Hello, ${name}`;
// }
// return `${name} is not a string`;
// };

console.log(fSayHello("Mark"));
console.log(fSayHello("Oleg"));



// ================= 2 hw ========================
const fTriangle = (n, m) => {
	if (typeof n === 'number' || m === 'number') {
		let k = Math.sqrt(n ** 2 + m ** 2);
		return k;
	}
	return 'Error';
};

// function fTriangle (n, m) {
// if (typeof n === 'number' || m === 'number') {
// 	let k = Math.sqrt(n ** 2 + m ** 2);
// 	return k;
// }
// return 'Error';
// };

console.log(`k = ${fTriangle(3, 4)}`);



// ================= 3 hw ========================
const fMin = (a, b) => {
	if (typeof a === 'number' || b === 'number') {
		if (a < b) {
			return a;
		}
		return b;
	}
	return 'Error';
};

// function fMin(a, b) {
// if (typeof a === 'number' || b === 'number') {
// 	if (a < b) {
// 		return a;
// 	}
// 	return b;
// }
// return 'Error';
// };

console.log(`Smallest nubmer is: ${fMin(-2, 4)}`);



// ================= 4 hw ========================
const fIsEven = (v) => {
	if (typeof v === 'number') {
		if (v % 2 == 0) {
			return `${v} - чётное`;
		}
		return `${v} - нечётное`;
	}
	return `${v} is not a number`;
};

// function fIsEven (n) {
// if (typeof v === 'number') {
// 	if (v % 2 == 0) {
// 		return `${v} - чётное`;
// 	}
// 	return `${v} - нечётное`;
// }
// return `${v} is not a number`;
// };

console.log(fIsEven(12));



// ================= 5 hw ========================
const fDeleteChar = (str) => {
	if (typeof str === 'string') {
		str = str.slice(1).slice(0, -1);
		return str;
	}
	return `${str} is not a string`;
};

// function fDeleteChar(str) {
// 	if (typeof str === 'string') {
// 		str = str.slice(1).slice(0, -1);
// 		return str;
// 	}
// 	return `${str} is not a string`;
// };

console.log(fDeleteChar('qwerty'));



// ================= 8 hw ========================
const fJoinArray = (firArray, secArray) => {
	if (typeof firArray === 'object' && typeof secArray === 'object') {
		resultArray = firArray.concat(secArray);
		return resultArray;
	}
	return 'Error';
};

// function fJoinArray(firArray, secArray) {
// 	if (typeof firArray === 'object' && typeof secArray === 'object') {
// 		resultArray = firArray.concat(secArray);
// 		return resultArray;
// 	}
// 	return 'Error';
// };

console.log(fJoinArray([1, 2, 3], ['q', 'w']));