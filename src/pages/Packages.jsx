import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";


const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Change this for mens site
  const WEBSITE_TYPE = "BRIDAL";

  useEffect(() => {
    // 1. Static Initializer
    setPackages([
      {
        id: 1,
        title: "Silver Package",
        price: "₹10,000 - ₹12,000",
        description: "Perfect for intimate gatherings or simple functions.",
        features: ["HD Makeup", "Basic Hairdo", "Saree Draping"]
      },
      {
        id: 2,
        title: "Gold Package",
        price: "₹15,000 - ₹18,000",
        description: "Our most popular package for weddings and large events.",
        features: ["HD Makeup", "Premium Hair styling", "Jewellery Fixing", "Draping"]
      },
      {
        id: 3,
        title: "Diamond Airbrush",
        price: "₹20,000 - ₹25,000",
        description: "Flawless, long-lasting look that withstands sweat and tears.",
        features: ["Airbrush Makeup", "Adv. Hairstyle", "Lashes & Lenses", "Extensions included"]
      },
      {
        id: 4,
        title: "Guest Makeup",
        price: "₹3,000 - ₹5,000",
        description: "For bridesmaids, sisters, and close friends.",
        features: ["Party Makeup", "Simple Hairdo"]
      }
    ]);
    setLoading(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section-padding"
      style={{ paddingTop: "150px" }}
    >
      <SEO
        title="Bridal Makeup Packages & Prices"
        description="Affordable luxury bridal makeup packages in Chennai. Choose from HD, Airbrush, Reception, and Engagement packages tailored for you."
      />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Packages</h1>

        <p style={{ color: "var(--color-text-secondary)" }}>
          Curated experiences for every occasion.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                background: "var(--color-bg-soft)",
                padding: "2.5rem",
                border: "1px solid rgba(212, 175, 55, 0.1)",
                borderRadius: "8px",
                height: "400px",
                animation: "pulse 1.5s infinite"
              }}
            >
              <div style={{ height: "30px", width: "60%", background: "rgba(255,255,255,0.05)", marginBottom: "1rem" }}></div>
              <div style={{ height: "40px", width: "40%", background: "rgba(255,255,255,0.05)", marginBottom: "2rem" }}></div>
              <div style={{ height: "20px", width: "100%", background: "rgba(255,255,255,0.05)", marginBottom: "0.5rem" }}></div>
              <div style={{ height: "20px", width: "90%", background: "rgba(255,255,255,0.05)", marginBottom: "0.5rem" }}></div>
              <div style={{ height: "20px", width: "70%", background: "rgba(255,255,255,0.05)" }}></div>
            </div>
          ))}
          <style>{`
            @keyframes pulse {
              0% { opacity: 0.6; }
              50% { opacity: 1; }
              100% { opacity: 0.6; }
            }
          `}</style>
        </div>
      )}

      {/* Empty */}
      {!loading && packages.length === 0 && (
        <p style={{ textAlign: "center", color: "#aaa" }}>
          No packages available.
        </p>
      )}

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: "var(--color-bg-soft)",
              padding: "2.5rem",
              border: "1px solid rgba(212, 175, 55, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "var(--color-gold)",
              }}
            >
              {pkg.title}
            </h3>

            {/* Price */}
            <h4
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              {pkg.price}
            </h4>

            {/* Description */}
            <p
              style={{
                color: "var(--color-text-secondary)",
                marginBottom: "2rem",
                flex: 1,
              }}
            >
              {pkg.description}
            </p>

            {/* Features */}
            {Array.isArray(pkg.features) && (
              <ul
                style={{
                  listStyle: "none",
                  marginBottom: "2rem",
                  color: "#ccc",
                }}
              >
                {pkg.features.map((feat, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.8rem",
                      gap: "0.8rem",
                    }}
                  >
                    <Check size={16} color="var(--color-gold)" />
                    {feat}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <Link
              to="/booking"
              state={{
                serviceName: pkg.title,
                packageServices: pkg.features,
              }}
              className="btn-primary"
              style={{ textAlign: "center" }}
            >
              Book This
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Packages;
