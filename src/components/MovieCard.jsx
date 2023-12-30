import React from 'react'
import { MOVIE_POSTER } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='moviePoster' src={MOVIE_POSTER + posterPath} />
    </div>
  )
}

export default MovieCard;