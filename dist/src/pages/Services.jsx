import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';
import styles from './Services.module.css';

const services = [
    {
        category: "Hair Services",
        items: [
            { name: "Signature Haircut", price: "₹800", desc: "Consultation, precision cut, wash, and style." },
            { name: "Skin Fade", price: "₹950", desc: "Seamless fade with foil shaver finish. Includes wash." },
            { name: "Buzz Cut", price: "₹500", desc: "One guard all over, tapered edges. Quick and clean." },
            { name: "Grey Blending", price: "₹1200", desc: "Natural looking color to reduce grey for a younger look." }
        ]
    },
    {
        category: "Grooming & Spa",
        items: [
            { name: "Beard Sculpt", price: "₹600", desc: "Trim, shape, line-up and beard oil application." },
            { name: "Hot Towel Shave", price: "₹900", desc: "Traditional straight razor shave with hot towels and steam.", featured: true },
            { name: "The Full Experience", price: "₹2500", desc: "Haircut + Beard/Shave + Facial. The ultimate treatment.", featured: true },
            { name: "Express Facial", price: "₹1500", desc: "Cleansing, exfoliation, and hot towel finish." }
        ]
    },
    {
        category: "Groom Bridal Packages",
        subtext: "Exclusive grooming & wedding-ready styling for men.",
        items: [
            { name: "Basic Groom Package", desc: "Skin cleanup + haircut + beard sculpt + D-Tan for a clean, polished look." },
            { name: "Premium Groom Package", desc: "HD groom makeup + haircut & styling + beard shaping + D-Tan + fixing spray.", featured: true },
            { name: "Signature Wedding Package", desc: "HD makeup + skin polishing + beard styling + long-lasting fixing for photoshoots.", featured: true }
        ]
    }
];

export default function Services() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Premium Men's Salon</h1>
                <p className={styles.subtitle}>
                    Expert Grooming & Precision Styling at MAGIC 7 Signature Salon.
                </p>
            </header>

            <div className={styles.servicesGridHeader}>
                <h2>Our Premium Services</h2>
                <p>Explore our curated menu designed for the modern gentleman. For a detailed <strong>men salon chennai price list</strong>, please visit our studio or contact us directly.</p>
            </div>

            {services.map((cat, idx) => (
                <div key={idx} className={styles.categoryBlock}>
                    <div>
                        <h3 className={styles.categoryTitle}>{cat.category}</h3>
                        {cat.subtext && <span className={styles.categorySubtitle}>{cat.subtext}</span>}
                    </div>
                    <div className={styles.grid}>
                        {loading ? (
                            Array(4).fill(0).map((_, i) => (
                                <div key={i} className={styles.card} style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <Skeleton width="60%" height="24px" />
                                    <Skeleton width="100%" height="1px" style={{ opacity: 0.2 }} />
                                    <Skeleton width="100%" height="16px" />
                                    <Skeleton width="80%" height="16px" />
                                    <div style={{ marginTop: 'auto' }}>
                                        <Skeleton width="100%" height="40px" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            cat.items.map((item, i) => (
                                <div key={i} className={`${styles.card} ${item.featured ? styles.featured : ''}`}>
                                    {item.featured && <span className={styles.featuredLabel}>Recommended</span>}
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.serviceName}>{item.name}</h4>
                                        {/* <span className={styles.price}>{item.price}</span> */}
                                    </div>
                                    <div className={styles.divider}></div>
                                    <p className={styles.desc}>{item.desc}</p>
                                    <Link to="/contact" style={{ width: '100%' }}>
                                        <Button variant={item.featured ? 'primary' : 'secondary'} fullWidth>
                                            Visit Salon
                                        </Button>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
