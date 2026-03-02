import React, { useState, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

// Lazy Load Pages
const Home = React.lazy(() => import("./pages/Home"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Packages = React.lazy(() => import("./pages/Packages"));
const Founder = React.lazy(() => import("./pages/Founder"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Booking = React.lazy(() => import("./pages/Booking"));
const BridalStudioVyasarpadi = React.lazy(() => import("./pages/BridalStudioVyasarpadi"));



function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();



  // Fix: Disable browser's automatic scroll restoration
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when loading finishes
  React.useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      <Loader onLoadingComplete={() => setLoading(false)} />
      <ScrollToTop />

      {!loading && (
        <div className="app-container">
          <Navbar />

          {/* Main Content */}
          <main style={{ minHeight: "100vh", position: "relative" }}>
            <Suspense fallback={<Loader />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {/* ================= PUBLIC ROUTES ================= */}
                  <Route path="/" element={<Home />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/packages" element={<Packages />} />
                  <Route path="/founder" element={<Founder />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />

                  <Route
                    path="/bridal-studio-vyasarpadi"
                    element={<BridalStudioVyasarpadi />}
                  />



                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          <Footer />
          <Chatbot />
        </div >
      )
      }
    </>
  );
}

export default App;
