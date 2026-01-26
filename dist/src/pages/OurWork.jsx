import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import styles from './OurWork.module.css';
import Skeleton from '../components/ui/Skeleton';
import { supabase } from '../supabaseClient'; // Ensure this path is correct
export default function OurWork() {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [zoom, setZoom] = useState(false);
    useEffect(() => {
        fetchWorks();
    }, []);
    const fetchWorks = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('gallery')
                .select('*')
                .eq('website_type', 'MENS')
                .eq('is_active', true)
                .order('created_at', { ascending: false });
            if (error) throw error;
            if (data) {
                const mappedWorks = data.map(item => ({
                    // Get public URL for valid image paths
                    src: item.image_path
                        ? supabase.storage.from('gallery').getPublicUrl(item.image_path).data.publicUrl
                        : '',
                    // Use 'title' column if it exists, otherwise fallback to category
                    title: item.title || item.category,
                    // Use 'category' column
                    category: item.category,
                    // Use 'caption' column as description
                    desc: item.caption || ''
                }));
                setWorks(mappedWorks);
            }
        } catch (error) {
            console.error("Error fetching works:", error);
        } finally {
            setLoading(false);
        }
    };
    const openLightbox = (index) => {
        setSelectedImage(index);
        setZoom(false);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
        setSelectedImage(null);
        setZoom(false);
        document.body.style.overflow = 'unset';
    };
    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % works.length);
        setZoom(false);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + works.length) % works.length);
        setZoom(false);
    };
    const toggleZoom = (e) => {
        e.stopPropagation();
        setZoom(!zoom);
    };
    if (loading) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Our Work</h1>
                    <p className={styles.subtitle}>Moments of grace, captured in time.</p>
                </header>
                <div className={styles.workGrid}>
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={styles.workCard} style={{ height: '400px', position: 'relative' }}>
                            <Skeleton width="100%" height="100%" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Work</h1>
                <p className={styles.subtitle}>
                    Moments of grace, captured in time.
                </p>
            </header>
            <div className={styles.workGrid}>
                {works.map((work, idx) => (
                    <WorkCard key={idx} work={work} idx={idx} onClick={() => openLightbox(idx)} />
                ))}
            </div>
            {selectedImage !== null && works[selectedImage] && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button className={styles.closeButton} onClick={closeLightbox}>
                        <X size={32} />
                    </button>
                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
                        <ChevronLeft size={24} />
                    </button>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={works[selectedImage].src}
                            alt={works[selectedImage].title}
                            className={styles.lightboxImage}
                            style={{
                                transform: zoom ? 'scale(1.5)' : 'scale(1)',
                                cursor: zoom ? 'zoom-out' : 'zoom-in'
                            }}
                            onClick={toggleZoom}
                        />
                        {/* Optional: Show title/desc in lightbox if desired */}
                        <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            <h3>{works[selectedImage].title}</h3>
                        </div>
                    </div>
                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}
function WorkCard({ work, idx, onClick }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <div
            className={styles.workCard}
            onClick={onClick}
            style={{ animation: `fadeUp 0.6s ease-out ${idx * 0.1}s backwards` }}
        >
            <div className={styles.imageWrapper}>
                {!loaded && <Skeleton width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} />}
                <img
                    src={work.src}
                    alt={work.title}
                    className={styles.workImage}
                    style={{ opacity: loaded ? undefined : 0 }}
                    onLoad={() => setLoaded(true)}
                />
                <div className={styles.overlay}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{work.title}</h3>
                        <p className={styles.cardDesc}>{work.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}