import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import Button from '../ui/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Our Work', path: '/our-work' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/Magic7.webp" alt="MAGIC 7 Signature Logo" style={{ height: '40px', marginRight: '10px' }} />
                    MAGIC 7 Signature
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`} aria-label="Main navigation">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                            aria-current={isActive(item.path) ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div style={{ marginLeft: '1rem' }}>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <Button size="sm">Visit</Button>
                        </Link>
                    </div>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </header>
    );
}
