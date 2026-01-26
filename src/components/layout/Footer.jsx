import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>MAGIC 7 Signature</h2>
                        <p className={styles.tagline}>Precision grooming for the modern man. Experience true luxury.</p>

                        <div className={styles.socialSection}>
                            <span className={styles.followLabel}>Follow Us</span>
                            <div className={styles.socials}>
                                <a href="https://www.instagram.com/magic_7_signature?igsh=bXVrMnJyc2RlbGx5" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                                <a href="https://www.facebook.com/profile.php?id=61586974835146" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>

                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Explore</h3>
                        <div className={styles.links}>
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/our-work">Our Work</Link>
                            <Link to="/testimonials">Testimonials</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Other Shops</h3>
                        <div className={styles.links}>
                            <a href="https://sripalibeautysaloon.in/" target="_blank" rel="noopener noreferrer">Sripali Beauty Saloon</a>
                            <a href="https://sripalibridalstudio.in/" target="_blank" rel="noopener noreferrer">Sripali Bridal Studio</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Contact</h3>
                        <div className={styles.contactItem}>
                            146, Erukkenchery High Rd,
                            Sharma Nagar, Vyasarpadi,
                            Chennai, Tamil Nadu 600039
                            <span className={styles.landmark}>Landmark: Mysore Mahal Opposite</span>
                        </div>
                        <div className={styles.contactItem}>
                            <a href="mailto:magic7signaturesalon@gmail.com">magic7signaturesalon@gmail.com</a>
                        </div>
                        <div className={styles.contactItem}>
                            <a href="tel:+917305397887">+91 73053 97887</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} MAGIC 7 Signature. All rights reserved.</p>
                    <p style={{ opacity: 0.7 }}>
                        Designed by <a href="https://crevasolution.in" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>CrevaSolution</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
