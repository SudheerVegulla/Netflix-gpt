import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config);
    console.log(selectedLang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-md'>
            <input className='p-4 m-4 col-span-9 rounded-md' type="text" placeholder={lang[selectedLang.lang].gptSearchPlaceholder} />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[selectedLang.lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar