import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './Contact.module.css';
import { supabase } from '../supabaseClient';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, phone, message, email } = formData;

        // Append email to message since the provided snippet didn't have an email column
        const finalMessage = `[Email: ${email}]\n\n${message}`;

        try {
            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        name: name,
                        phone: phone,
                        message: finalMessage,
                        source: 'Saloon',
                        created_at: new Date().toISOString()
                    },
                ]);

            if (error) throw error;

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.visual}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.84766853985286!2d80.25314787019975!3d13.121610182873907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265158ee2171f%3A0xb4a4f436b0e8dee4!2sSripali%20Bridal%20Studio!5e1!3m2!1sen!2sin!4v1769259076000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salon Location"
                ></iframe>
            </div>

            <div className={styles.formSection}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <span className={styles.subtitle}>Contact Us</span>
                        <h1 className={styles.title}>Get in Touch</h1>
                    </header>

                    <div className={styles.infoGrid}>
                        <div>
                            <span className={styles.label}>Visit Us</span>
                            <p className={styles.value}>146, Erukkenchery High Rd,<br />Sharma Nagar, Vyasarpadi,<br />Landmark Mysore Mahal Opposite,<br />Chennai, Tamil Nadu 600039</p>
                        </div>
                        <div>
                            <span className={styles.label}>Contact Info</span>
                            <p className={styles.value}>+91 73053 97887<br />magic7signaturesalon@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <span className={styles.label}>Name</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span className={styles.label}>Phone Number</span>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="+91 98765 43210"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span className={styles.label}>Email Address</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span className={styles.label}>Message</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>
                        <Button fullWidth disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
