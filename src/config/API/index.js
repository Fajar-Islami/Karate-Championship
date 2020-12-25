import Axios from 'axios';

const urlPhotos = 'http://www.omdbapi.com/?apikey=36a49aae&s=war';
const getPhoto = async () => {
  try {
    const {
      data: { Search },
    } = await Axios.get(urlPhotos);
    const filmData = Search.map((films) => ({
      Title: films.Title,
      Year: films.Year,
      imdbID: films.imdbID,
      Type: films.Type,
      Poster: films.Poster,
    }));
    return filmData;
  } catch (error) {
    console.log(error);
  }
};

export { getPhoto };
