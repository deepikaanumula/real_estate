import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const [address, setAddress] = useState("");
  const position = [51.505, -0.09]; 
  const zoom = 13;

  const getAddressFromCoordinates = async (lat, lng) => {
    const apiKey = "YOUR_OPENCAGE_API_KEY"; 
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const result = response.data.results[0];
      if (result) {
        setAddress(result.formatted); 
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error retrieving address");
    }
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng; 
    getAddressFromCoordinates(lat, lng);
  };

  return (
    <footer className="bg-purple-600 m-5 mb-28 rounded-lg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <img className="w-28 h-auto" src={Logo} alt="Logo" />
        </div>

        <div className="border-2 border-purple-400 my-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold">Subscribe</h3>
            <div className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Your e-mail"
                className="bg-purple-500 text-white p-2 rounded-l-lg outline-none placeholder-white w-full"
              />
              <button className="bg-purple-700 flex items-center p-2 rounded-lg">
                Send <FaArrowRight />
              </button>
            </div>
            <p className="mt-2 text-sm">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <Link to="aboutus" smooth={true} duration={500}>
                <li>About</li>
              </Link>
              <Link to="queryform" smooth={true} duration={500}><li>Contact</li></Link>
              <Link to="faq" smooth={true} duration={500}><li>Faqs</li></Link>

              <NavLink to='/blogs'><li>Blog</li></NavLink>
              
              <NavLink to="/policy">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="mt-2">hi@justhome.com</p>
            <p>(123) 456-7890</p>
          </div>

          <div>
            <h3 className="font-semibold">Our Address</h3>
            <p className="mt-2">EuroKids Preschool at Gajularamaram, </p>
            <p>Best Kindergarten in Hyderabad</p>
          </div>

          <div className="flex justify-center p-4">
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7500488787596!2d78.41905247390926!3d17.51944119898995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f7754cdf915%3A0xeb35cae480a86928!2sEuroKids%20Pre-School%20Gajularamaram!5e0!3m2!1sen!2sin!4v1730889960764!5m2!1sen!2sin"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-2 border-purple-400 my-6"></div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagramAlt className="text-2xl text-[#E4405F]" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-[#1877F2]" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-[#0077B5]" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="text-2xl text-[#1DA1F2]" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <a href="http://localhost:3001/">&copy; 2024. MN Realty</a>
          <p>
            Developed by{" "}
            <a
              href="https://prodbizsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prodbiz Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
