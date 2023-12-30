import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies);
   if(!movies)return null; // added this line because next line will throw error, because it is accessing store before store creation
   //initially nowPlayingMovies is null so movies[0] is invalid
   const mainMovie = movies[0];
   const {original_title,overview,id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} description={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer