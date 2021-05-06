import BASE_URL from './urls.js';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

/**
 * (Async) Donates
 * @param {number} DonationAmount
 * @param {string} tree_type
 * @param {string} Username optional
 */

export default async function donate(DonationAmount, tree_type, Username) {
	const endOfUrl = Username ? `/${Username}` : '';

	//POST Donation
	await fetch(`${BASE_URL}/donations${endOfUrl}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			donation_amount: DonationAmount,
		}),
	}).then(handleErrors);

	//POST Tree (In production, this would not be a valid route)
	await fetch(`${BASE_URL}/trees`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			tree_type: tree_type,
			year_planted: 2021,
		}),
	});

	//GET User Trees
}
