import React from 'react';
import styles from './OurWork.module.css';

const works = [
    {
        src: '/images/portflio1.jpg',
        title: 'The Royal Signature',
        desc: 'A sophisticated cut tailored for the modern Indian gentleman. Perfect balance of tradition and trend.'
    },
    {
        src: '/images/portflio2.jpg',
        title: 'Luxury Grooming Ritual',
        desc: 'Relaxing hot towel shave with premium essential oils. The ultimate stress-relief experience.'
    },
    {
        src: '/images/portflio3.jpg',
        title: 'M7 Faded Texture',
        desc: 'High-contrast skin fade with textured top. Sharp, clean, and defined for a bold look.'
    },
    {
        src: '/images/portflio4.jpg',
        title: 'Beard Sculpting',
        desc: 'Precision line-up and shaping to enhance facial structure. detailed beard care included.'
    }
];

export default function OurWork() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Portfolio</h1>
                <p style={{ color: 'var(--muted-foreground)' }}>
                    Browse our latest work. Each cut is designed to complement the individual's style and bone structure.
                </p>
            </header>

            <div className={styles.list}>
                {works.map((work, idx) => (
                    <div key={idx} className={styles.item} style={{ animationDelay: `${idx * 0.2}s` }}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={work.src}
                                alt={work.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.styleName}>{work.title}</h3>
                            <p className={styles.styleDesc}>{work.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
