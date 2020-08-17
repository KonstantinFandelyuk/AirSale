// function getSearchId() {
//   return fetch("https://front-test.beta.aviasales.ru/search")
//     .then(response => response.json())
//     .then(({ searchId }) => searchId);
// }

export async function getSearchId() {
  const response = await fetch("https://front-test.beta.aviasales.ru/search");
  const data = await response.json();

  return data.searchId;
}

// function getTickets(searchId) {
//     return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
//         .then(response => response.json());
// }

export async function getTickets(searchId) {
  const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
  const data = await response.json();

  return data;
}

export function renderTicketDate(date, duration) {
  const startTime = new Date(date);
  const endTime = new Date(startTime);

  endTime.setMinutes(endTime.getMinutes() + duration);

  return `${dateToString(startTime)} - ${dateToString(endTime)}`;
}

function dateToString(d) {
  const hh = d.getHours().toString().padStart(2, "0");
  const mm = d.getMinutes().toString().padStart(2, "0");

  return `${hh}:${mm}`;
}
