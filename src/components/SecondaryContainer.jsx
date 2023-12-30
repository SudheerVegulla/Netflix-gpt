import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    // there can be movielist of popular,trending,nowPlaying,horror etc
  return (
    <div className=' bg-black'>
        <div className='-mt-60 relative z-20 pl-6'>
        <MovieList title="Now Playing" movies = {movies?.nowPlayingMovies}/>
        <MovieList title="Popular" movies = {movies.nowPlayingMovies}/>
        <MovieList title="Trending" movies = {movies.nowPlayingMovies}/>
        <MovieList title="Upcomin" movies = {movies.nowPlayingMovies}/>
        </div>
        
    </div>
    
  )
}

export default SecondaryContainer