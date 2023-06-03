import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-white h-20 p-6 md:p-12 w-[89%] m-auto fixed left-1/2 translate-x-[-50%]  drop-shadow-xl z-20 ${
          scrolling ? "top-0 w-full rounded-none md:p-6" : "fixed top-5 rounded-xl"
        }`}
      >
        <div className="flex items-center">
          <h1 className="text-2xl font-bold italic uppercase text-gray-700">Space Travels.</h1>
        </div>
        <ul
          className={`md:flex gap-12 font-medium text-gray-700 [&>li]:cursor-pointer absolute md:static top-20 bg-white max-md:p-3  text-center ${
            openMenu ? "" : "hidden"
          } ${scrolling && openMenu ? "top-12 w-full right-0 rounded-b-none" : "rounded-b-xl right-5"}`}
        >
          <a href="/">
            <li className="hover:text-blue-400">Home</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">About</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Pricing</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Testimonials</li>
          </a>
        </ul>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          <button className="text-gray-700" onClick={menuHandler} aria-label="Menu">
            {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </nav>
      {openMenu ? <div onClick={menuHandler} className="h-screen w-screen absolute top-0 left-0 z-10"></div> : null}
    </>
  );
};

export default Navbar;
