import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import styles from './Booking.module.css';

const servicesList = [
    'Signature Haircut',
    'Skin Fade',
    'Buzz Cut',
    'Grey Blending',
    'Beard Sculpt',
    'Hot Towel Shave',
    'The Full Experience',
    'Express Facial'
];

const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Booking() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        const serviceParam = searchParams.get('service');
        if (serviceParam) {
            setFormData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call and save to LocalStorage
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const newBooking = {
                id: crypto.randomUUID(),
                ...formData,
                status: 'pending',
                createdAt: new Date().toISOString()
            };

            const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
            localStorage.setItem('bookings', JSON.stringify([...existing, newBooking]));

            navigate('/book/confirmation');
        } catch (e) {
            console.error(e);
            alert('Error submitting booking');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1 className={styles.title}>Secure Your Spot</h1>
                <p style={{ color: 'var(--muted-foreground)' }}>Simple, direct booking. No account required.</p>
            </header>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <div className={styles.fullWidth}>
                        <h3 className={styles.sectionTitle}>1. Appointment Details</h3>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label}>Service</label>
                        <select
                            className={styles.select}
                            value={formData.service}
                            onChange={e => setFormData({ ...formData, service: e.target.value })}
                            required
                        >
                            <option value="">Select a Service...</option>
                            {servicesList.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Date</label>
                        <input
                            type="date"
                            className={styles.input}
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Time</label>
                        <select
                            className={styles.select}
                            value={formData.time}
                            onChange={e => setFormData({ ...formData, time: e.target.value })}
                            required
                        >
                            <option value="">Select Time...</option>
                            {timeSlots.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.fullWidth}>
                        <h3 className={styles.sectionTitle} style={{ marginTop: '1rem' }}>2. Contact Info</h3>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Karthik Raja"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Phone Number</label>
                        <input
                            type="tel"
                            className={styles.input}
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label}>Email (for confirmation)</label>
                        <input
                            type="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="karthik@example.com"
                            required
                        />
                    </div>
                </div>

                <Button fullWidth disabled={loading}>
                    {loading ? 'Processing...' : 'Confirm Appointment'}
                </Button>
            </form>
        </div>
    );
}
