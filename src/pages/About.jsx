import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>About MAGIC 7 Signature</h1>
                <p className={styles.subtitle}>Redefining Men's Grooming in Chennai Since 2026</p>
            </header>

            <section className={styles.story}>
                <div className={styles.content}>
                    <h2>Our Story</h2>
                    <p>
                        MAGIC 7 Signature was born from a simple vision: to create a sanctuary where modern gentlemen could experience world-class grooming without compromise. Located in the heart of Vyasarpadi, Chennai, we've established ourselves as the premier destination for men who understand that style is an investment, not an expense.
                    </p>
                    <p>
                        What started as a passion for precision cutting has evolved into a full-service grooming experience. Our founder, driven by years of experience in luxury salons across India, recognized a gap in the Chennai market for authentic, masculine grooming that respects both tradition and contemporary trends.
                    </p>
                </div>
            </section>

            <section className={styles.values}>
                <h2>Our Values</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3>Excellence</h3>
                        <p>Every cut, every shave, every detail is executed with precision. We don't believe in shortcuts.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Authenticity</h3>
                        <p>We stay true to classic grooming principles while embracing modern techniques and styles.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Respect</h3>
                        <p>Your time, your style, and your preferences are paramount. We listen first, then create.</p>
                    </div>
                </div>
            </section>

            <section className={styles.team}>
                <h2>Expert Team</h2>
                <p className={styles.teamIntro}>
                    Our stylists aren't just trained—they're artists. Each member of the MAGIC 7 team brings years of specialized experience in men's grooming, from classic barbering to contemporary styling techniques.
                </p>
                <p>
                    We invest heavily in continuous education, ensuring our team stays ahead of global trends while maintaining the timeless skills that define exceptional grooming.
                </p>
            </section>

            <section className={styles.location}>
                <h2>Visit Us in Vyasarpadi</h2>
                <p>
                    Conveniently located at 146, Erukkenchery High Rd, we serve not only Vyasarpadi but also neighboring communities including Perambur, Kodungaiyur, and Sharma Nagar. Easily accessible from Vyasarpadi Jeeva Railway Station, we're your local destination for premium grooming.
                </p>
                <div className={styles.ctaSection}>
                    <Link to="/contact">
                        <Button size="lg">Get Directions</Button>
                    </Link>
                    <Link to="/services">
                        <Button size="lg" variant="secondary">View Services</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
