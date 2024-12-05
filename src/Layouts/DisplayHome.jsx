import React from 'react'
import Navbar from '../Components/Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from '../Components/AlbumItem'
import { songsData } from '../assets/assets'
import SongsItem from '../Components/SongsItem'

const DisplayHome = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
        
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
        
      </div>
    </div>
  )
}

export default DisplayHome