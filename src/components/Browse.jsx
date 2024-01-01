import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useAddPopularMovies from '../hooks/useAddPopularMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const searchButtonView = useSelector(store => store.gptSearch);
  useNowPlayingMovies();
  useAddPopularMovies();
  return (
    <div>
      <Header/>
      {searchButtonView.toggleSearchView ? <GptSearchPage/> : 
      <><MainContainer/>
      <SecondaryContainer/></> // if there is morethan one child for expression wrap it inside fragment.
      }
      
    </div>
  )
}

export default Browse