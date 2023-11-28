export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const fetcherWithId = (url, eventId) =>
  fetch(`${url}?id=${eventId}`).then((r) => r.json());
