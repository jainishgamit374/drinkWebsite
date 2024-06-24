import { CiUser, CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="h-[8vh] w-full flex items-center justify-between px-20">
        <div className="flex w-[20%] items-center gap-10">
            <div className="navMenu cursor-pointer flex flex-col gap-2">
                <span className="h-[1.5px] w-10 bg-black rounded-full inline-block"></span>
                <span className="h-[1.5px] w-10 bg-black rounded-full inline-block"></span>
            </div>
            <img className="h-5 object-contain" src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg" alt="" />
        </div>
        <div className="flex w-[60%] justify-center items-center gap-6 text-sm font-medium">
          <h1 className="cursor-pointer">Energy Drinks</h1>
          <h1 className="cursor-pointer">Events</h1>
          <h1 className="cursor-pointer">Athletes</h1>
          <h1 className="cursor-pointer">TV</h1>
        </div>
        <div className="flex w-[20%] justify-end gap-4 text-xl">
          <CiUser className="bg-zinc-300 p-2 text-4xl rounded-full text-black cursor-pointer"/>
          <CiSearch className="bg-zinc-300 p-2 text-4xl rounded-full text-black cursor-pointer"/>
        </div>
    </div>
  )
}

export default Navbar