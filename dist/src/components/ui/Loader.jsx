import React from 'react';
import styles from './Loader.module.css';

export default function Loader({ fadeOut }) {
    return (
        <div className={`${styles.loaderContainer} ${fadeOut ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <h1 className={styles.text}>MAGIC 7 Signature</h1>
                <div className={styles.subtext}>Loading Experience</div>
            </div>
        </div>
    );
}
