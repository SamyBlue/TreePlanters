import BASE_URL from './urls.js';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

/**
 * (Async) Logs user out
 */

export default async function logout() {
	const data = await fetch(`${BASE_URL}/logout`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then(handleErrors)

	return data;
}
