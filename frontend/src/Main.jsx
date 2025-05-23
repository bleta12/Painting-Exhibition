import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1675813863340-b7e84c4a1fb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmdzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1672329273045-fc09b2298fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZHVzYSUyMHBhaW50aW5nfGVufDB8fDB8fHww"
  ];

  return (
    <div className="container my-5">
     <div className="mx-auto">
        <div
          className="position-relative rounded-4 overflow-hidden shadow"
          style={{ height: "500px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Artwork"
            className="w-100 h-100 animate__animated animate__zoomIn"
            style={{ objectFit: "cover" }}
          />

          {/* Overlay Text with Fade-In Animation */}
          <div
            className="position-absolute text-white px-4 py-3 animate__animated animate__fadeInUp"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "1rem",
              width: "90%",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            <h1 className="fs-2 fs-md-1 fw-bold">Experience Art in a New Light</h1>
            <p className="lead d-none d-sm-block">
              Dive into a digital gallery where emotion, color, and creativity collide.
              Discover breathtaking paintings from emerging and established artists.
            </p>
            <a href="#gallery" className="btn btn-light mt-3 px-4 py-2 rounded-pill">
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
