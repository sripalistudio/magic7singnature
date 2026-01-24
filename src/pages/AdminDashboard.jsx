import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function AdminDashboard() {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('admin_auth');
        if (!isAuth) {
            navigate('/admin');
            return;
        }

        const data = JSON.parse(localStorage.getItem('bookings') || '[]');
        setBookings(data);
    }, [navigate]);

    const updateStatus = (id, newStatus) => {
        const updated = bookings.map(b =>
            b.id === id ? { ...b, status: newStatus } : b
        );
        setBookings(updated);
        localStorage.setItem('bookings', JSON.stringify(updated));
    };

    return (
        <div style={{
            padding: 'calc(var(--header-height) + 2rem) 2rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--foreground)' }}>Appointments</h1>
                <Button size="sm" variant="secondary" onClick={() => {
                    localStorage.removeItem('admin_auth');
                    navigate('/admin');
                }}>Logout</Button>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {bookings.length === 0 && <p>No bookings found.</p>}
                {bookings.map(booking => (
                    <div key={booking.id} style={{
                        padding: '1.5rem',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        background: 'var(--secondary)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{booking.name}</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                                {booking.service} • {booking.date} at {booking.time}
                            </p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{booking.phone}</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.8rem',
                                border: '1px solid var(--border)',
                                textTransform: 'uppercase'
                            }}>
                                {booking.status}
                            </span>
                            {booking.status === 'pending' && (
                                <>
                                    <Button size="sm" onClick={() => updateStatus(booking.id, 'confirmed')}>Confirm</Button>
                                    <Button size="sm" variant="secondary" onClick={() => updateStatus(booking.id, 'rejected')}>Reject</Button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
