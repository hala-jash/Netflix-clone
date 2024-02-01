import prismadb from '@/../lib/prismadb';

export const getMovies = async () => {
    try {
        const movies = await prismadb.movie.findMany();
        console.log(movies, "movies")
        return movies
    }
    catch(error){
        console.error(error)
    }
}