import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './images/Logo.png'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={Logo}  className={styles.logo} />
        <h1 className={styles.navbarLogo}>MNRealty</h1>
      </div>
      <button
        className={styles.toggleButton}
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        {isNavOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ''}`}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/Register" className={styles.navLink}>Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
