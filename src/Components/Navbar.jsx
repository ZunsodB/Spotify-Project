import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 mt-0'>
            <p className='bg-white text-black px-2 py-0 rounded-xl cursor-pointer'>
                All
            </p>
            <p className='bg-[#ffffff26] text-white px-2 py-0 rounded-xl cursor-pointer hover:bg-[#ffffff30]'>
                Music
            </p>
            <p className='bg-[#ffffff26] text-white px-2 py-0 rounded-xl cursor-pointer hover:bg-[#ffffff30]'>
                Podcast
            </p>
    </div>
  )
}

export default Navbar