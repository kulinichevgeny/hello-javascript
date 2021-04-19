// ======================== 1 hw ========================
// todo: Написать функцию, которая возвращает приветствие для пользователя.
// todo: Выводить особое приветствие для пользователя с именем Mark.

const sayHello = (name) => {
	if (typeof name !== 'string') return;
	const myBoyfriendName = 'mark';

	if (name.toLowerCase() === myBoyfriendName) {		// Проверка совпадения имени в нижнем регистре
		return `I love u, ${name}!`;
	}

	return `Hello, ${name}!`;
};

console.log(sayHello('Mark'));



// ======================== 2 hw ========================
// todo: Найти гипотенузу прямоугольного треугольника по теореме Пифагора.

const calculateHypotenuse = (leg1, leg2) => {
	if (typeof leg1 !== 'number' && typeof leg2 !== 'number') return;

	return Math.sqrt(leg1 ** 2 + leg2 ** 2);
}

console.log(`Your answer is: ${calculateHypotenuse(3, 4)}`);



// ======================== 3 hw ========================
// todo: Написать функцию, которая возвращает меньшее из чисел.

const findMin = (firstNumber, secondNumber) => {
	if (typeof firstNumber !== "number" && secondNumber !== "number") return;

	return Math.min(firstNumber, secondNumber);
};

console.log(`Your number is: ${findMin(-50, 4)}`);



// ======================== 4 hw ========================
// todo: Написать функцию, которая возвращает чётное ли число.

const isEven = (number) => {
	if (typeof number !== 'number') return;

	return number % 2 === 0;
};

console.log(isEven(12));



// ======================== 5 hw ========================
// todo: Написать функцию, которая удаляет первый и последний элемент строки.

const deleteChar = (string) => {
	if (typeof string !== 'string') return;

	return string.slice(1, -1);
};

console.log(deleteChar('12345'));



// ======================== 6 hw ========================
// todo: Написать функцию, которая делает первый символ строки заглавным, а остальные строчными.

const capitalize = (string) => {
	if (typeof string !== 'string') return;

	const firstChar = string[0].toUpperCase();
	const restString = string.slice(1).toLowerCase();


	return firstChar + restString;
};

console.log(capitalize('asdfg'));



// ======================== 7 hw ========================
// todo: Написать функцию, которая принимает массив из строчно-числовых значений.
// todo: Возвращает массив, в котором строчные значения стали числовыми, а числовые строчными.

const typeInvertor = (arr) => {
	if (!Array.isArray(arr)) return;

	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			result.push(+arr[i]);
		} else {
			result.push(arr[i].toString());
		}
	}

	return result;
};

console.log(typeInvertor([1, 2, '3', '4', 5]));



// ======================== 8 hw ========================
// todo: Написать функцию, которая принимает два массива и возвращает один целый.

const arrayCombiner = (firstArray, secondArray) => {
	if (typeof firstArray !== 'object' || typeof secondArray !== 'object') return;

	return [...firstArray, ...secondArray];				// spread
	// return firstArray.concat(secondArray); 		// concat
};

console.log(arrayCombiner([1, 2, 3], ['q', 'w']));



// ======================== 9 hw ========================
// todo: Написать функцию, которая принимает строку и допустимое количество символов (число).
// todo: Если длина строки больше чем допустимое количество символов - строка обрезается и добавляется ...

const stringCutter = (text, symbolsQuanity) => {
	if (typeof text !== 'string' && typeof symbolsQuanity !== 'number') return;

	return `${text.slice(0, symbolsQuanity)}...`;
};

console.log(stringCutter('Lorem Ipsum', 5));