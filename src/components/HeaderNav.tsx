import { FC, useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";

interface HeaderNavProps {
  margin: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ margin }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationLinks = [
    { to: "/aboutNav", label: "About" },
    { to: "/programNav", label: "Programs" },
    { to: "/blognav", label: "Blog" },
  ];

  useEffect(() => {
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
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const headerpix = "https://sailab.ng/wp-content/uploads/2023/10/cropped-SAIL-Logo-228x67-1.png";

  return (
    <div className={`relative ${margin ? 'mt-[2rem]' : 'mt-0'}`}>
      <div className="flex  items-center justify-between w-[100svw] md:w-full max-w-screen-2xl mx-auto px-4 overflow-x-hidden gap-2">
        <header>
          <img src={headerpix} alt="SAIL Logo" className="w-[10rem]  lg:w-[16rem] xl:w-[16rem] 2xl:w-[16rem]  max-w-full" />
        </header>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-auto  ">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-6 xl:gap-6 2xl:gap-6 font-normal text-[1.15rem]">
          {navigationLinks.map((list, index) => (
            <Link key={index} to={list.to}>
              <p className="hover:underline decoration-2 underline-offset-8">{list.label}</p>
            </Link>
          ))}
          <div ref={dropdownRef} className="relative">
            <p className="hover:underline decoration-2 underline-offset-8 cursor-pointer" onClick={toggleDropdown}>Visit</p>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full bg-white shadow-md rounded-md mt-1 z-10">
                <Link to="/guest" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>Visit</Link>
                <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>Facility</Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
   <div className="md:hidden absolute left-20 top-[3rem] flex  items-end gap-2 bg-white shadow-md p-4 z-50">
          {navigationLinks.map((list, index) => (
            <Link key={index} to={list.to} onClick={() => setIsMobileMenuOpen(false)}>
              <p className="hover:underline decoration-2 underline-offset-8">{list.label}</p>
            </Link>
          ))}
          <Link to="/guest" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline decoration-2 underline-offset-8">Visit</Link>
          <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline decoration-2 underline-offset-8">Facility</Link>
        </div>
      )}
    </div>
  )
}

export default HeaderNav
