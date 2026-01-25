import React from 'react';
import styles from './OurWork.module.css';

const works = [
    {
        src: '/images/portflio1.webp',
        title: 'The Royal Signature',
        desc: 'A sophisticated cut tailored for the modern Indian gentleman. Perfect balance of tradition and trend.'
    },
    {
        src: '/images/portflio2.webp',
        title: 'Luxury Grooming Ritual',
        desc: 'Relaxing hot towel shave with premium essential oils. The ultimate stress-relief experience.'
    },
    {
        src: '/images/portflio3.webp',
        title: 'M7 Faded Texture',
        desc: 'High-contrast skin fade with textured top. Sharp, clean, and defined for a bold look.'
    },
    {
        src: '/images/portflio4.webp',
        title: 'Beard Sculpting',
        desc: 'Precision line-up and shaping to enhance facial structure. detailed beard care included.'
    }
];

import Skeleton from '../components/ui/Skeleton';
import { useState } from 'react';

// ... (existing imports, but useState might need to be imported if not already)

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
                    <PortfolioItem key={idx} work={work} idx={idx} />
                ))}
            </div>
        </div>
    );
}

function PortfolioItem({ work, idx }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={styles.item} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className={styles.imageWrapper}>
                {!loaded && <Skeleton width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} />}
                <img
                    src={work.src}
                    alt={work.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                    }}
                    onLoad={() => setLoaded(true)}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.styleName}>{work.title}</h3>
                <p className={styles.styleDesc}>{work.desc}</p>
            </div>
        </div>
    );
}
