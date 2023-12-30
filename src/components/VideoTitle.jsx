import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[10%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg py-4 w-1/4'>{description}</p>
        <div>
            <button className='bg-white text-black text-lg p-4 px-10 rounded-md m-2 hover:bg-opacity-60'><PlayArrowIcon style={{marginBottom:'2px'}}/> Play</button>
            <button className='bg-white text-black text-lg p-4 px-10 rounded-md hover:bg-opacity-60'><InfoOutlinedIcon style={{marginBottom:'2px'}}/> More info</button>
        </div>
    </div>
  )
}

export default VideoTitle