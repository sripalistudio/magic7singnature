import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({ width, height, className, style }) => {
    return (
        <div
            className={`${styles.skeleton} ${className || ''}`}
            style={{
                width: width,
                height: height,
                ...style
            }}
        />
    );
};

export default Skeleton;
