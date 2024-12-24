import { TiStarHalf } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router";

const nav = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
  setToggle(true);
}

function closeMenu(){
  setToggle(false);
}

  return (
   <>
    <div className="flex items-center justify-between p-5 lg:flex-row bg-red-800">
      <div>
        <a href="#" className="text-white font-sans font-semibold text-2xl tracking-wider flex items-center"><TiStarHalf />DELVIA</a>
      </div>
      <div className="ssm:hidden lg:block space-x-2">
        <a href="#" className="text-white hover:bg-red-950 rounded-full px-5 py-2 text-xl"><Link to="/">Home</Link></a>
        <a href="#" className="text-white hover:bg-red-950 rounded-full px-5 py-2 text-xl"><Link to="/aboutme">About Me</Link></a>
        <a href="#" className="text-white hover:bg-red-950 rounded-full px-5 py-2 text-xl"><Link to="/projects">Projects</Link></a>
      </div>
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <AiOutlineClose onClick={closeMenu} size={25} className="text-white cursor-pointer"/>
        ):(
          <HiMenuAlt1 onClick={openMenu} size={25} className="text-white cursor-pointer"/>
        )}
        
      </div>
    </div>

    <div className="ssm:block lg:hidden">
      {toggle ? (
        <div className="flex justify-between ml-10 bg-red-900 w-full">
        <ul>
          <li className="text-white text-xl mb-2 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="text-white text-xl mb-2 cursor-pointer"><Link to="/aboutme">About Me</Link></li>
          <li className="text-white text-xl mb-2 cursor-pointer"><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
      ):(
        <div></div>
      )}
    </div>
   </>
  )
}

export default nav