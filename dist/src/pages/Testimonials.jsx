import React, { useState, useEffect } from 'react';
import Skeleton from '../components/ui/Skeleton';
import styles from './Testimonials.module.css';

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
    },
    {
        name: "Vikram",
        role: "Philanthropist",
        text: "Excellent discretion and privacy. The VIP service is exactly what I need on a busy day.",
        initial: "V"
    }
];

export default function Testimonials() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    <span>Client Stories</span>
                    Words of <strong>Distinction</strong>
                </h1>
                <p className={styles.intro}>
                    Don't just take our word for it. Here is what the gentlemen of the city have to say about their experience at MAGIC 7 Signature.
                </p>
            </header>

            <div className={styles.grid}>
                {loading ? (
                    Array(4).fill(0).map((_, i) => (
                        <div key={i} className={styles.card} style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Skeleton width="100%" height="60px" style={{ marginBottom: '1rem' }} />
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Skeleton width="40px" height="40px" style={{ borderRadius: '50%' }} />
                                <div style={{ flex: 1 }}>
                                    <Skeleton width="60%" height="16px" style={{ marginBottom: '0.4rem' }} />
                                    <Skeleton width="40%" height="12px" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    reviews.map((review, idx) => (
                        <div key={idx} className={styles.card} style={{ animationDelay: `${idx * 0.1}s` }}>
                            <p className={styles.quote}>{review.text}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{review.initial}</div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{review.name}</span>
                                    <span className={styles.role}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
