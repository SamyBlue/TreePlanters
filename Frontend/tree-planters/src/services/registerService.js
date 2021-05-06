import BASE_URL from './urls.js';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

/**
 * (Async) Feed in register info -> spits out user data (username and user_id)
 * @param {string} Username
 * @param {string} Password
 * @param {string} Email
 */

export default async function register(Username, Password, Email) {
	const data = await fetch(`${BASE_URL}/users`, {
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
		.then((response) => response.json());

	return;
}
