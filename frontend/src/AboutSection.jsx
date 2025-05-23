import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="container my-5"
      style={{
        padding: "3rem",
        borderRadius: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.74)", // black-ish background
        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
      }}
      data-aos="fade-up"
    >
      <div className="row align-items-center">
        {/* Photo on left */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1674814950019-b29545fea7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0fGVufDB8fDB8fHww"
            alt="Artists painting"
            style={{
              width: "100%",
              borderRadius: "1rem",
              boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
              objectFit: "cover",
              height: "350px",
            }}
          />
        </div>

        {/* Text on right */}
        <div className="col-md-6 text-light">
          <h3 style={{ color: "#f0f0f0", marginBottom: "1.5rem" }}>
            Why We Created This App
          </h3>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#ccc" }}>
            We built this platform to empower artists to showcase their work and connect
            with a global community. Whether you're a painter or an enthusiast, this is
            your place to explore creativity.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#ccc" }}>
            Dive into inspiring galleries, meet other creators, and share your artistic voice
            in a space made just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
