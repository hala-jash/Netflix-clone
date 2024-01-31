import prismadb from '@/../lib/prismadb';

export const getBillBoard = async () => {
  try {
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    // console.log(randomMovies, "random movie IN UTILS");
    return randomMovies[0]
  } catch (error) {
    console.error(error);
  }
};
