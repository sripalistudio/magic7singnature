import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Zap, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './Home.module.css';

const heroImages = [
    '/images/hero.webp',
    '/images/hero1.webp',
    '/images/hero2.webp',
    '/images/hero3.webp',
];

const reviews = [
    {
        name: "Karthikeyan",
        role: "Regular Client",
        text: "The service at MAGIC 7 Signature is simply unmatched. The attention to detail and atmosphere make it the only place I trust with my grooming.",
        initial: "K"
    },
    {
        name: "Vijay Kumar",
        role: "Business Owner",
        text: "A sharp look is essential for my line of work. These guys know exactly how to deliver a classic, timeless cut. Highly recommended.",
        initial: "VK"
    },
    {
        name: "Surya Narayanan",
        role: "Attorney",
        text: "I don't have time for mediocrity. MAGIC 7 Signature respects my schedule and delivers perfection every single time.",
        initial: "SN"
    }
];

import Skeleton from '../components/ui/Skeleton';

// ... (existing imports)

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    {!loadedImages[currentImage] && (
                        <Skeleton
                            width="100%"
                            height="100%"
                            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                        />
                    )}
                    {heroImages.map((src, index) => (
                        <div
                            key={src}
                            className={`${styles.heroImage} ${index === currentImage ? styles.activeImage : ''}`}
                        >
                            <img
                                src={src}
                                alt="Salon Ambience"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: loadedImages[index] ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out'
                                }}
                                onLoad={() => handleImageLoad(index)}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.overlay}></div>

                <div className={styles.heroContent}>
                    <span className={styles.tagline}>M7S. 2026</span>
                    <h1 className={styles.title}>Refining the Gentleman in You</h1>
                    <Link to="/contact">
                        <Button>Contact Us</Button>
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Services</h2>
                        <p className={styles.sectionDesc}>
                            Experience premium grooming tailored to your style. We offer a full range of services for the modern man.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <Scissors size={40} className={styles.serviceIcon} />
                            <h3 className={styles.serviceTitle}>Precision Haircut</h3>
                            <p className={styles.serviceDesc}>
                                Expert consultation followed by a tailored cut and style using premium products.
                            </p>
                            <Link to="/services?featured=haircut">
                                <Button variant="secondary" fullWidth>View Details</Button>
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <Zap size={40} className={styles.serviceIcon} />
                            <h3 className={styles.serviceTitle}>Beard Sculpting</h3>
                            <p className={styles.serviceDesc}>
                                Hot towel service, straight razor line-up, and beard shaping for the perfect look.
                            </p>
                            <Link to="/services?featured=beard">
                                <Button variant="secondary" fullWidth>View Details</Button>
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <Calendar size={40} className={styles.serviceIcon} />
                            <h3 className={styles.serviceTitle}>The Full Experience</h3>
                            <p className={styles.serviceDesc}>
                                Combine a haircut and beard trim with a relaxing facial massage.
                            </p>
                            <Link to="/book">
                                <Button variant="secondary" fullWidth>Book Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <div className={styles.ghostText}>M7S 2026</div>

                <div className={styles.experienceContent}>
                    <h2 className={styles.experienceTitle}>
                        Refining the <br />
                        <strong>Gentleman</strong> in You
                    </h2>
                    <p className={styles.experienceDesc}>
                        At MAGIC 7 Signature, we blend India's rich grooming heritage with modern global aesthetics.
                        Experience world-class styling that honors tradition while defining your unique signature look.
                    </p>
                    <div>
                        <Link to="/our-work">
                            <Button variant="primary">Discover our Work</Button>
                        </Link>
                    </div>
                </div>

                <div className={styles.experienceImageWrapper}>
                    <img
                        src="/images/experience_update.webp"
                        alt="Cinematic Grooming Experience"
                        className={styles.experienceImage}
                    />
                </div>
            </section>
            <section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    <h2 className={styles.testimonialsTitle}>
                        <span>Words of Distinction</span>
                        Client Stories
                    </h2>

                    <div className={styles.testimonialsGrid}>
                        {reviews.map((review, idx) => (
                            <div key={idx} className={styles.testimonialCard}>
                                <div className={styles.quoteIcon}>"</div>
                                <p className={styles.testimonialText}>{review.text}</p>
                                <div className={styles.clientInfo}>
                                    <div className={styles.clientAvatar}>{review.initial}</div>
                                    <div className={styles.clientDetails}>
                                        <span className={styles.clientName}>{review.name}</span>
                                        <span className={styles.clientRole}>{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/testimonials">
                            <Button variant="secondary">View All Stories</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
