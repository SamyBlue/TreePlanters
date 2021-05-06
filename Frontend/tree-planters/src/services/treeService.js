import BASE_URL from './urls.js';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

/**
 * (Async) Spits out all trees
 * @param {string} username (optional) specify to get only this users trees
 */

export default async function getTrees(username) {
	const endOfUrl = username ? `/${username}` : '';

	const data = await fetch(`${BASE_URL}/trees${endOfUrl}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then(handleErrors)
		.then((response) => response.json());

	return data;
}
