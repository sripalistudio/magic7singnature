import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            // Simple obsession-less auth for demo
            localStorage.setItem('admin_auth', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--background)'
        }}>
            <form onSubmit={handleLogin} style={{
                padding: '3rem',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Staff Portal</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Passcode"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        marginBottom: '1rem',
                        background: 'var(--secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)'
                    }}
                />
                <Button fullWidth>Access Dashboard</Button>
            </form>
        </div>
    );
}
