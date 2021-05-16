// Для задания вам понадобится следующая ссылка, куда вы будете делать запросы https://pokeapi.co/api/v2

// Чтобы использовать axios добавте в head <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Для того чтобы узнать какие данные приходят на запрос используйте https://pokeapi.co.
// Там представлены возможные вариации запросов, можно поиграться и попробовать разные варианты, перед тем как приступать к заданию

// В домашнем задании использовать исключительно async await подход
// todo: 1.	Написать асинхронную функцию, которая делает запрос на https://pokeapi.co/api/v2/pokemon и в консоль выводит массив полученых покемонов

// todo: 2.	Написать асинхронную функцию, которая в качестве параметра получает имя покемона, и делает запрос на получение подробной информации о нём. 
// Как должен выглядеть запрос для получения данной информации вы сможете найти на сайте апишки покемонов.
// В случае, если покемон найден не будет, в консоль выводить сообщение ‘Покемон, по имени <имя запрошенного покемона> не найден.’ 

// todo: 3.	Написать асинхронную функцию которая делает запрос на адрес который предоставлен в первой задаче. 
// Результатом этого запроса является массив объектов с двумя полями, имя покемона и url. url каждого элемента массива позволит вам получить подробную информацию о покемоне.
// Результатом выполнения вашей функции должен быть массив из объектов, в которых хранится подробная информация о покемонах.

// HINT: Вам понадобится метод Promise.all


//---------------------------------------------------------------------------------------------------------------------------------
// * 1

const baseURL = 'https://pokeapi.co/api/v2';

const getPokemons = async () => {
	try {
		return await axios.get(`${baseURL}/pokemon`).then(response => response.data.results);

	} catch (error) { }
};

// getPokemons();


//---------------------------------------------------------------------------------------------------------------------------------
// * 2

const getPokemonByName = async (name) => {
	try {
		const foundPokemon = await axios
			.get(`${baseURL}/pokemon/${name}`)
			.then(response => response.data);

		console.log(foundPokemon);

	} catch (error) {
		console.log(`Покемон, по имени ${name} не найден.`);
	}
};

// getPokemonByName('ditto');


//---------------------------------------------------------------------------------------------------------------------------------
// * 3

const getPokemonsDetailedInfo = async () => {
	try {
		const pokemonsShortInfo = await getPokemons();

		const detailsInfoRequests = pokemonsShortInfo.map(pokemon => axios.get(pokemon.url));

		const result = await Promise.all(detailsInfoRequests).then(responses =>
			responses.map((response) => response.data));

		console.log(result);

	} catch (error) { }
};

// getPokemonsDetailedInfo();