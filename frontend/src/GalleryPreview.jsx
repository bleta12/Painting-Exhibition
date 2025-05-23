import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1675813863340-b7e84c4a1fb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmdzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1672329273045-fc09b2298fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZHVzYSUyMHBhaW50aW5nfGVufDB8fDB8fHww"
];

const overlayBaseStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.3s ease",
  borderRadius: "0.375rem",
  pointerEvents: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "700",
  textAlign: "center",
  padding: "1rem",
};

const paintingCardStyle = {
  position: "relative",
  cursor: "pointer",
  boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
  borderRadius: "0.375rem",
  overflow: "hidden",
};

const imgStyle = {
  height: "300px",
  width: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "0.375rem",
};

const buttonStyle = {
  border: "1px solid white",
  backgroundColor: "transparent",
  color: "white",
  padding: "0.25rem 0.75rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
  fontSize: "0.875rem",
  fontWeight: "600",
  marginTop: "0.5rem",
};

const GalleryPreview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container my-5" style={{backgroundColor: "rgba(246, 246, 246, 0.9)",padding: "4rem",borderRadius: "0.5rem",boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",}}>
      <h2 className="mb-4 text-center" style={{letterSpacing: '0.1em',color: '#4a4a4a', textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>Gallery Preview</h2>
      <div className="row g-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            data-aos="fade-up"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={paintingCardStyle}>
              <img src={src} alt={`Painting ${index + 1}`} style={imgStyle} />
              <div
                style={{
                  ...overlayBaseStyle,
                  opacity: hoveredIndex === index ? 1 : 0,
                  pointerEvents: hoveredIndex === index ? "auto" : "none",
                }}
              >
                <p>Please log in to explore more</p>
                <button style={buttonStyle}>Log In</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
