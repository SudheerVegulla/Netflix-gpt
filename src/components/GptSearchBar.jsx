import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const selectedLang = useSelector(store => store.config);
    // console.log(selectedLang);

    const handleGPTSearch = async () => {
        // console.log(searchText.current.value);

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" +
        searchText.current.value + ".only give me names of 5 movies,comma separated like the example result given ahead. Example result:Orange,Kick,Dookudu,Salaar,KGF "

        const gptResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });

            if(!gptResults.choices){
                // error handling
            }

            console.log(gptResults.choices)
        //On search button click,make an api call to GPT api and get movie results
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-md' onSubmit={e => e.preventDefault()}>
            <input className='p-4 m-4 col-span-9 rounded-md' type="text" ref={searchText} placeholder={lang[selectedLang.lang].gptSearchPlaceholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[selectedLang.lang].search}</button> //onClick={handleGPTSearch}
        </form>
    </div>
  )
}

export default GptSearchBar