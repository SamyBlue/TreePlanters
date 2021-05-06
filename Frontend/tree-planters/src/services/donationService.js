import BASE_URL from "./urls.js";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/**
 * (Async) Sends off a donation and plants a tree
 * @param {string} username
 */

export default async function getDonations(user_id) {
  const endOfUrl = user_id ? `/${user_id}` : "";

  const data = await fetch(`${BASE_URL}/donations${endOfUrl}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json());

  return data;
}
