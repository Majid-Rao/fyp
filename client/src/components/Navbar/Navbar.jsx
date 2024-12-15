import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link, NavLink } from 'react-router-dom';
// import Popup from '../../pages/Popup';
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>Skill-Swap</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*Button section */}
          <div className="hidden lg:block space-x-6">
            <Link to="/signIn" className="font-semibold">
              Sign in
            </Link>
            <Link
              to="/register"
              className="text-white bg-secondary font-semibold rounded-full px-6 py-2"
            >
              Register
            </Link>
            {/* <button onClick={() => setIsPopupOpen(true)} className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
            Register
            </button>
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
