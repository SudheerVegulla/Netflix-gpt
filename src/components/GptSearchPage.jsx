import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { backgroundImage } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
            <img src={backgroundImage} alt="background image for login page"/>
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;