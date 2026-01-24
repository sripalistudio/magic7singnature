import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
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
    }
];

export default function Services() {
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
                    <h3 className={styles.categoryTitle}>{cat.category}</h3>
                    <div className={styles.grid}>
                        {cat.items.map((item, i) => (
                            <div key={i} className={`${styles.card} ${item.featured ? styles.featured : ''}`}>
                                {item.featured && <span className={styles.featuredLabel}>Recommended</span>}
                                <div className={styles.cardHeader}>
                                    <h4 className={styles.serviceName}>{item.name}</h4>
                                    <span className={styles.price}>{item.price}</span>
                                </div>
                                <div className={styles.divider}></div>
                                <p className={styles.desc}>{item.desc}</p>
                                <Link to="/contact" style={{ width: '100%' }}>
                                    <Button variant={item.featured ? 'primary' : 'secondary'} fullWidth>
                                        Visit Salon
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
