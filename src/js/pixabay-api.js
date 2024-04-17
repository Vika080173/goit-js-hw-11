export function requestPixabay(quest) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';

  const params = new URLSearchParams({
    key: API_KEY,
    q: quest,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
