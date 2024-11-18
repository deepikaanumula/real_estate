
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavDash.module.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login');
    };

    const scrollToPropertyManagement = () => {
        const section = document.getElementById("property-management");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
   

    return (
        <nav className={styles.navbar}>
            <button onClick={() => navigate('/dashboard')} className={styles.link}>Home</button>
            <button onClick={scrollToPropertyManagement} className={styles.link}>
                Property Management
            </button>
           
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </nav>
    );
};

export default Navbar;
