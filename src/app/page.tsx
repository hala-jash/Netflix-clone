'use client';
import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';
import { getMovies } from '@/utils/getMovies';
export default async function Home() {
  const movies = await getMovies()
  return (
    <>
      <Navbar />
      <BillBoard />
      <div>
        <MovieList title="Trending Now" data ={movies}/>
      </div>
    </>
  );
}
