import BASE_URL from './urls.js';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

/**
 * (Async) Feed in login info -> Spits out username and user_id
 * @param {string} Username
 * @param {string} Password
 */

export default async function login(Username, Password) {
	const data = await fetch('http://localhost:5000/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'Test' /* Username, */,
			password: '1234' /* Password, */,
		}),
	})
		.then(handleErrors)
		.then((response) => response.json());

	return data;
}
