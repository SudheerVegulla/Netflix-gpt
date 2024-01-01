import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,title}) => {
    // console.log(movies);
  return (
    <div className='px-6'>
        <h1 className='text-2xl py-2 text-white'>{title}</h1>
        <div className='flex overflow-auto'>
            <div className='flex'>
            {movies !== null && movies.map(movie => <MovieCard key = {movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
        </div>
  )
}

export default MovieList