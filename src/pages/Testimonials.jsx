import React from 'react';
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
                {reviews.map((review, idx) => (
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
                ))}
            </div>
        </div>
    );
}
