import {FC,useState, useRef,useEffect} from 'react'
import { Link } from "react-router-dom";
interface HeaderNavProps {
  margin: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ margin }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track if the dropdown is open
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationLinks = [
    { to: "/aboutNav", label: "About " },
    { to: "/programNav", label: " Programs" },
    { to: "/blognav", label: "Blog" },
    
  ];

  useEffect(() => {
    // Close dropdown when clicking outside of it
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

    const headerpix =
    "https://sailab.ng/wp-content/uploads/2023/10/cropped-SAIL-Logo-228x67-1.png";
  return (
    <div className={margin ? 'mt-[2rem]' : 'mt-0'}>
      <div className="flex mx-[1rem] xl:mx-[2rem] 2xl:mx-[15rem] ">
        <header>
          <img src={headerpix} alt="" className="w-[16rem]" />
        </header>
        <nav className="mt-[1rem] w-[100%] flex gap-2 mr-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 justify-end md:font-normal lg:font-normal xl:font-normal 2xl:font-normal font-bold md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
          {navigationLinks.map((list, index) => (
            <Link key={index} to={list.to}>
              <p className="hover:underline decoration-2 underline-offset-8">{list.label}</p>
            </Link>
          ))}
          {/* Dropdown container */}
          <div ref={dropdownRef} className="relative">
            <p className="hover:underline decoration-2 underline-offset-8 cursor-pointer" onClick={toggleDropdown}>Visit</p>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute mr-[1rem] top-full left-0 bg-white shadow-md rounded-md mt-1 z-10">
                <Link to="/guest" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>Visit</Link>
                <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>Facility</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default HeaderNav