import {FC} from 'react'
import { Link } from "react-router-dom";


const HeaderNav:FC = () => {
  const navigationLinks = [
    { to: "/aboutNav", label: "About Us" },
    { to: "/programNav", label: "Our Programs" },
    { to: "/blognav", label: "Blog" },
    { to: "/guest", label: "Visit" },
  ];
    const headerpix =
    "https://sailab.ng/wp-content/uploads/2023/10/cropped-SAIL-Logo-228x67-1.png";
  return (
    <div className="flex mx-[1rem] xl:mx-[2rem] 2xl:mx-[15rem] mt-[2rem]">
        <header>
          <img src={headerpix} alt="" className="w-[16rem]"/>
        </header>
        <nav className="mt-[1rem] w-[100%] flex gap-2 mr-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 justify-end md:font-normal lg:font-normal xl:font-normal 2xl:font-normal font-bold md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
         {navigationLinks.map((list,index)=>(
           <Link key={index} to={list.to}> <p className="hover:underline decoration-2 underline-offset-8 ">{list.label}</p></Link>
         ))}
       
        </nav>
      </div>
  )
}

export default HeaderNav