import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        // Check if this is a reload
        const navEntry = performance.getEntriesByType("navigation")[0];
        if (navEntry && navEntry.type === 'reload') {
            sessionStorage.removeItem('visited');
        }

        // Check if this is a fresh visit or reload
        const hasVisited = sessionStorage.getItem('visited');

        // If user wants it on refresh, we can check performance navigation or just rely on state reset?
        // But state resets every time. sessionStorage persists.
        // To satisfy "Show on refresh" AND "Use sessionStorage":
        // We can explicitly clear the session storage if we detect a reload, OR
        // we can just treat the local state init as the separate "session" (tab life).
        // However, standard "first visit" logic usually relies on sessionStorage to avoid showing it 
        // if the user navigates back to root or reloads.
        // Given the specific request:
        // 1. Show first time in tab. (sessionStorage empty)
        // 3. Show on refresh. (sessionStorage persists - so this conflicts unless we clear it).

        // Strategy: Clear sessionStorage on mount if it's a reload? 
        // Or simpler: The user might just mean "Session" as in "This specific page view flow".
        // But they asked for sessionStorage.

        // Let's implement the standard check.
        if (!hasVisited) {
            // Start Loading
            const timer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setLoading(false);
                    sessionStorage.setItem('visited', 'true');
                }, 500); // Wait for transition
            }, 2000); // 2 seconds loading time
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
            setFadeOut(true);
        }
    }, []);

    // If strictly loading (not fading out), don't render app yet if we want to "hide" it entirely?
    // Or render behind? "Show main app without showing loader".

    return (
        <div style={{ position: 'relative' }}>
            {loading && <Loader fadeOut={fadeOut} />}

            {/* Main App Content - Visible after loading starts fading or if not loading */}
            {(!loading || fadeOut) && (
                <Router>
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/our-work" element={<OurWork />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <WhatsAppButton />
                    <Footer />
                </Router>
            )}
        </div>
    );
}

export default App;
