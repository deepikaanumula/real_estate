import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
   

    return (
        <div className={styles.homeSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.welcomeMessage}>
                    <h1>Welcome to MNRealty</h1>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Hero;
