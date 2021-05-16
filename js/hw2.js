// * 1
// todo: Функция принимает МАССИВ пользователей. Возвращает ОБЪЕКТ, состоящий из МАССИВОВ women и men.
// todo: Поля firstName и lastName объеденить в одно fullName.

const users = [
	{
		id: 1,
		firstName: 'Jeanette',
		lastName: 'Penddreth',
		email: 'jpenddreth0@census.gov',
		gender: 'Female',
		ipAddress: '26.58.193.2',
	},
	{
		id: 2,
		firstName: 'Petr',
		lastName: 'Jackson',
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ipAddress: '229.179.4.212',
	},
];

const usersConverter = (usersList) => {
	if (!Array.isArray(usersList)) return;

	return usersList.reduce((result, user) => {
		const updatedUser = {
			id: user.id,
			fullName: `${user.firstName} ${user.lastName}`,
			email: user.email,
			ipAddress: user.ipAddress,
		};

		const gender = user.gender;

		if (result[gender]) {
			result[gender] = [...result[gender], updatedUser];
		} else {
			result[gender] = [];
			result[gender].push(updatedUser);
		}

		return result;
	}, {})
}

// console.log(usersConverter(users));


//---------------------------------------------------------------------------------------------------------------------------------
// * 2
// todo: Функция принимает массив объектов.
// todo: Возвращает массив пользователей, отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года.
// todo: Количество пользователей может быть не ограничено.

const initialData = [
	{ username: 'Boris', age: 25, },
	{ username: 'Alex', age: 21, },
	{ username: 'Oleg', age: 14, },
	{ username: 'Dmitriy', age: 35, },
	{ username: 'Lida', age: 72, },
];

const sortedUsersArray = (usersList) => {
	if (!Array.isArray(usersList)) return;

	return usersList.filter(user => user.age >= 21).sort((prev, next) => prev.username > next.username ? 1 : -1);
}

// console.log(sortedUsersArray(initialData));


//---------------------------------------------------------------------------------------------------------------------------------
// * 3
// todo: Функция принимает массив объектов пользователей первым параметром, id пользователя вторым параметром.
// todo: Функция должна удалить всех пользователей с передаваемыми в неё id и вернуть массив с оствашимеся пользователями.

const usersIdList = [
	{ name: 'Nick', id: 1, },
	{ name: 'Alex', id: 2, },
	{ name: 'Oleg', id: 3, },
	{ name: 'Dima', id: 4, },
	{ name: 'Lida', id: 5, },
];

const usersIdToRemove = (userList, usersId) => {
	if (!Array.isArray(userList) || !Array.isArray(usersId)) return;

	return userList.filter((user) => {
		const isIdExists = usersId.findIndex((id) => id === user.id) !== -1;

		return !isIdExists;
	})
};

// console.log(usersIdToRemove(usersIdList, [1, 2, 3]));


//---------------------------------------------------------------------------------------------------------------------------------
// * 4
// todo: Функция принимает массив из числовых и строчных значений.
// todo: Результатом функции является новый массив объектов.
// todo: Каждый элемент нового массива должен сожержать поля значения, индекса, типа данных (number или string).

const randomShitArray = [38, 'Hello, World!', 18, 'Попугаев'];

const someFc = (arr) => {
	if (!Array.isArray(arr)) return;

	return arr.map((item, index) => ({
		element: item,
		type: typeof item,
		index,
	}));
};

// console.log(someFc(randomShitArray));


//---------------------------------------------------------------------------------------------------------------------------------
// * 5
// todo: Функция проверяет строку на полиндром.

const isPalindrome = (str) => {
	if (typeof str !== 'string') return;

	return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
};

// console.log(isPalindrome('Level'));


//---------------------------------------------------------------------------------------------------------------------------------
// * 6
// todo: Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map.

const newReleases = [{
	id: 70111470,
	title: "Die Hard",
	boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 654356453,
	title: "Bad Boys",
	boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
}, {
	id: 65432445,
	title: "The Chamber",
	boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 675465,
	title: "Fracture",
	boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
}];

const updatedReleases = (arr) => {
	if (!Array.isArray(arr)) return;

	return arr = arr.map((release) => ({
		id: release.id,
		title: release.title,
	}))
};

// console.log(updatedReleases(newReleases));


//---------------------------------------------------------------------------------------------------------------------------------
// * 7
// todo: Выведите массив с id для видео у которых рейтинг 5.0. 
// todo: В качестве входных данных используйте newReleases из предыдущего задания.

const getTopReleases = (filmList) => {
	if (!Array.isArray(filmList)) return;

	const maxRating = 5.0;

	return filmList.reduce((result, release) => {
		if (release.rating[0] === maxRating) {
			result.push(release.id);
		}

		return result;
	}, [])
};

// console.log(getTopReleases(newReleases));


//---------------------------------------------------------------------------------------------------------------------------------
// * 8
// todo: Преобразуйте массив в объект используя функцию reduce.

const videos = [{
	id: 65432445,
	title: "The Chamber"
}, {
	id: 675465,
	title: "Fracture"
}, {
	id: 70111470,
	title: "Die Hard"
}, {
	id: 654356453,
	title: "Bad Boys"
}];

const videosIdTitleMap = videos.reduce((result, video) => {
	result[video.id] = video.title;

	return result;
}, {});

// console.log(videosIdTitleMap);


//---------------------------------------------------------------------------------------------------------------------------------
// * 9
// todo: С помощью функций map, reduce, вывести url у которого самая большая площадь.

const boxarts = [
	{
		width: 200,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
	},
	{
		width: 150,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
	},
	{
		width: 300,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
	},
	{
		width: 425,
		height: 150,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
	}
];

const preparedBoxArts = boxarts.map(({ width, height, url }) => ({
	calculatedArea: width * height,
	url,
}));

// console.log(preparedBoxArts);

const theBiggestAreaURL = preparedBoxArts.reduce((result, boxart) => {
	return result.calculatedArea > boxart.calculatedArea ? result : boxart;
}).url;

// console.log(theBiggestAreaURL);