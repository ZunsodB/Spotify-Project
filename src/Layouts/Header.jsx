import logo from '../assets/images/Logo(shadowify).png'
const Header = () => {
  return (
    <div className="flex flex-row justify-between text-white text-center h-full pt-2">
      <div className="logo h-full">
        <img 
          src={logo} alt="Logo" 
          className="h-full w-36 object-cover pb-2" />
      </div>
      <div className="flex flex-row w-[70%] mb-0.5">
          <div className="flex h-full w-[48px] justify-center items-center rounded-full bg-[rgba(31,31,31)] ml-[2.3%]">
            <img  
              src="src/assets/images/home-icon.png" alt="Home" 
              className="h-7 w-7 object-cover "/>  
          </div>
          <div className="flex flex-row items-center h-full w-[475px] bg-[rgba(31,31,31)] rounded-full ml-2">
            <img 
              src="src/assets/images/search-icon.png" alt="search" 
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
