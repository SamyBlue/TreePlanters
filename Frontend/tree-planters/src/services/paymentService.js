import BASE_URL from "./urls.js";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/**
 * (Async) Donates
 * @param {number} DonationAmount
 * @param {string} Username optional
 */

export default async function donate(DonationAmount, Username) {
  const endOfUrl = Username ? `/${Username}` : "";
  const data = await fetch(`http://localhost:5000/donations/Test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      donation_amount: DonationAmount,
    }),
  }).then(handleErrors);

  return data;
}
