import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Confirmation() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Booking Received</h1>
            <p style={{ maxWidth: '600px', color: 'var(--muted-foreground)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Thank you. Your appointment request has been submitted.
                We will review it shortly and send a confirmation to your email.
            </p>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
