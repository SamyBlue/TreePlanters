import BASE_URL from './urls.js';

/**
 * (Async) Feed in login info -> spits out user data (username and user_id)
 * @param {string} username
 * @param {string} password
 */

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export default async function login(Username, Password) {
	const data = await fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify([
			{
				username: Username,
				password: Password,
			},
		]),
	})
		.then(handleErrors)
		.then((response) => response.json())
		.catch((error) => console.log(error));

	return { username: data['username'], user_id: data['user_id'] };
}
