import React, { useState, useEffect, useRef } from "react";
import Styles from "./Navbar.module.css";
import { UilWhatsapp } from "@iconscout/react-unicons";
import Logo from "../Images/Logo.png";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const socialLinksRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openSocialIcons = () => setShowSocialIcons(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialLinksRef.current && !socialLinksRef.current.contains(event.target)) {
        setShowSocialIcons(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="sticky top-0 z-50">
      <header className="text-black body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-3 items-center justify-between">
          <a className="flex items-center text-black mb-4 md:mb-0">
            <img className="w-16 h-16 animate-pulse" src={Logo} alt="Logo" />
          </a>

          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
            </button>
          </div>

          <nav
            className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? "block" : "hidden"} lg:block
              ${isOpen ? "absolute top-full left-0 w-full bg-white bg-opacity-50 backdrop-blur-md p-5" : ""}`}
          >
            <Link to="home" smooth duration={500} className="block lg:inline mr-5 hover:text-pink-300">
              Home
            </Link>
            <NavLink to="/blogs" className="block lg:inline mr-5 hover:text-pink-300">
              Blog
            </NavLink>
            <Link to="properties" smooth duration={500} className="block lg:inline mr-5 hover:text-pink-300">
              Properties
            </Link>
            <Link to="services" smooth duration={500} className="block lg:inline mr-5 hover:text-pink-300">
              Services
            </Link>
            <Link to="aboutus" smooth duration={500} className="block lg:inline mr-5 hover:text-pink-300">
              About Us
            </Link>
            <Link to="queryform" smooth duration={500} className="block lg:inline mr-5 hover:text-pink-300">
              Contact
            </Link>

            <div className="lg:hidden flex flex-col mt-5 space-y-3">
              <div className="flex items-center">
                <IoCallOutline className="text-2xl" />
                <a href="tel:+919876543210" className="text-black hover:text-pink-300 text-lg ml-2">
                  +91 9876543210
                </a>
              </div>
              <NavLink to="/slotbooking">
                <button className="border-2 border-zinc-900 bg-white text-gray-900 py-1 px-3 hover:bg-pink-200 rounded-2xl text-base">
                  Book your Slot
                </button>
              </NavLink>
            </div>
          </nav>
          <div className="hidden lg:flex items-center space-x-6">
            <IoCallOutline className="text-2xl" />
            <a href="tel:+919876543210" className="text-black hover:text-pink-300 text-lg">
              +91 9876543210
            </a>
          </div>
          <NavLink to="/slotbooking" className="hidden lg:block">
            <button className="border-2 border-zinc-900 bg-white text-gray-900 py-1 px-3 hover:bg-pink-200 rounded-2xl text-base">
              Book your Slot
            </button>
          </NavLink>

          <Link to="navbar" smooth duration={500} className="fixed bottom-6 left-6 z-50">
            <FaArrowUp className="text-black bg-white rounded-full p-1" size={28} />
          </Link>

          <a
            href={`https://wa.me/${9133312345}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${Styles.wtsp} fixed bottom-6 right-6 z-50`}
          >
            <UilWhatsapp size={28} />
          </a>
        </div>

        
      </header>
    </section>
  );
}
