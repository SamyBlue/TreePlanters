import BASE_URL from "./urls.js";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/**
 * (Async) Spits out all trees
 * @param {number} user_id (optional) specify to get only this users trees
 */

export default async function getTrees(user_id) {
  const endOfUrl = user_id ? `/${user_id}` : "";

  let data = await fetch(`http://localhost:5000/trees/1`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  /* .then(handleErrors) 
  .then((response) => response.json()); */
  console.log(data, "testertertsertser");
  alert(`${BASE_URL}/trees${endOfUrl}`);
  return data;
}
