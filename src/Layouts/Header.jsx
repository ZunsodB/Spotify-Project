import logo from '../assets/images/Logo(shadowify).png'
import home from '../assets/images/home-icon.png'
import search from '../assets/images/search-icon.png'

const Header = () => {
  return (
    <div className="flex flex-row justify-between text-white text-center h-full pt-2">
      <div className="logo h-full">
        <img 
          src={logo} alt="Logo" 
          className="h-full w-36 object-cover pb-2" />
      </div>
      <div className="flex flex-row w-[70%] mb-0.5">
        <div className="group flex flex-col items-center h-full w-[48px] justify-center rounded-full bg-[rgba(31,31,31)] ml-[2.3%] transform transition-transform duration-300 hover:scale-105 relative">
          <img  
            src={home} alt="Home" 
            className="h-7 w-7 object-cover" />  
          {/* Home text appearing hover effect */}
          <div className="absolute text-white bg-[rgba(31,31,31)] px-2 py-1 rounded-md text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 top-[57px]">
            Home
          </div>
        </div>
        <div className="flex flex-row items-center h-full w-[475px] bg-[rgba(31,31,31)] rounded-full ml-2">
          <img 
            src={search} alt="search" 
            className="h-7 w-7 mx-3"/>
          <p className="font-sans text-[#b3b3b3] text-md font-normal tracking-wide mt-1">
            What do you want to play?
          </p>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}

export default Header
