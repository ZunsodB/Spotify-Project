import logo from '../assets/images/Logo(shadowify).png'
import home from '../assets/images/home-icon.png'
import search from '../assets/images/search-icon.png'
import browse from '../assets/images/browse-icon.png'
import {GoBell} from "../Utils/icons";
import {GrInstallOption} from '../Utils/icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Header = () => {
  return (
    <div className="flex flex-row justify-between text-white bg-black items-center h-full">
      <div className="logo h-full">
        <img 
          src={logo} alt="Logo" 
          className="h-full w-36 object-cover pb-2" />
      </div>
      <div className="flex flex-row w-[70%] h-full">
        <button className="group flex flex-col items-center w-[48px] my-2 justify-center rounded-full bg-[rgba(31,31,31)] ml-[2.3%] transform transition-transform duration-300 hover:scale-105 relative">
          <img  
            src={home} alt="Home" 
            className="h-7 w-7 object-cover" />  
          {/* Home text appearing hover effect */}
          <div className="absolute text-white bg-[rgba(31,31,31)] px-2 py-1 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 top-[57px]">
            Home
          </div>
        </button>
        <div className="flex flex-row items-center w-[34vw] bg-[rgba(31,31,31)] rounded-full m-2 py-2">
          <img
            src={search} alt="search" 
            className="h-7 w-7 mx-3"/>
          <p className="font-sans text-[#b3b3b3] text-md font-normal tracking-wide mt-1">
            What do you want to play?
          </p>
          <div className='h-[24px] w-[1px] bg-[rgba(124,124,124)] ml-auto'></div>
          <img 
            src={browse} alt="browse" 
            className="h-[28px] w-9 mr-3 ml-[6px] mt-[2px]"/>
        </div>
        <div className="flex flex-row justify-around items-center h-full w-[32vw] ">
          <div className="flex items-center justify-center ml-[4vw]">
                <button className="bg-white text-black font-semibold text-sm py-2 px-4 pt-2.5 rounded-full shadow-lg transform transition-transform duration-50 hover:scale-105">
                Explore Premium
                </button>
          </div>
          <button className='flex flex-row items-center gap-1.5 pt-[3px] transform transition-transform duration-50 hover:scale-105'>
            <GrInstallOption className='text-[17px] mb-[3px]' />
            <p className='font-semibold text-[12px] tracking-wide'>Install App</p>
          </button>
          <button className='text-[rgba(179,179,179)] text-xl hover:brightness-200 transform transition-transform duration-50 hover:scale-105'>
            <GoBell />
          </button>
          <button className='bg-gray-400 rounded-full transform transition-transform duration-50 hover:scale-105'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
