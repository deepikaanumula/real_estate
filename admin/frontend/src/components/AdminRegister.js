import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminRegister.module.css';

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = { name, email, password };

        try {
            const response = await fetch('https://realestate-production-3d17.up.railway.app/api/auth/register', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Registration successful!'); 
                setError('');
                setIsRegistered(true);
                
                setName('');
                setEmail('');
                setPassword('');
            } else {
                setError(data.message || 'Registration failed.'); 
                setSuccess('');
            }
        } catch (err) {
            setError('Server error. Please try again later.'); 
            setSuccess('');
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.formContainer}>
                <h2>Create Account</h2>
                {error && <p className={styles.error}>{error}</p>} 
                {success && <p className={styles.success}>{success}</p>} 
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className={styles.inputField}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className={styles.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className={styles.inputField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.registerBtn}>Register</button>
                </form>
                
                
                <p className={styles.alreadyRegisteredText}>Already have an account?</p>
                <Link to="/login" className={styles.loginBtn}>Login</Link>
            </div>
        </div>
    );
};

export default RegistrationPage;
