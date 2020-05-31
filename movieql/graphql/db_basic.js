export const getMovies = (limit, rating) => {
    async () => {
        const response = await fetch(`${API_URL}`);
        const json = await response.json();
        return json.data.movies
    }
}

let movies = [
    {
        id: 0,
        name: "About Time",
        score: 54
    },
    {
        id: 1,
        name: "Harry Porter",
        score: 3
    },
    {
        id: 2,
        name: "Doraemon",
        score: 100
    },
  
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else { 
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}