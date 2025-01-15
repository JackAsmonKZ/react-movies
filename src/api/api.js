const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, type = "all") => {
  const filmType = type === "all" ? "" : `&type=${type}`;
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}${filmType}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    return null;
  }
};
