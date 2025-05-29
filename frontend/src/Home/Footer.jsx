const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        color: "#fff",
        padding: "4rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      {/* About Section */}
      <div style={{ flex: "1", minWidth: "250px" }}>
        <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>ArtConnect</h4>
        <p style={{ lineHeight: "1.6" }}>
          A space where artists unite, exhibit, and connect. Built to promote creativity and community in the digital world.
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ flex: "1", minWidth: "200px" }}>
        <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Quick Links</h5>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li><a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Home</a></li>
          <li><a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Gallery</a></li>
          <li><a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Join Us</a></li>
          <li><a href="#" style={{ color: "#aaa", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div style={{ flex: "1", minWidth: "200px" }}>
        <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Follow Us</h5>
        <p>Stay connected through our social media.</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a href="#" style={{ color: "#fff" }}>Instagram</a>
          <a href="#" style={{ color: "#fff" }}>Facebook</a>
          <a href="#" style={{ color: "#fff" }}>Twitter</a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "0.9rem",
          borderTop: "1px solid #333",
          paddingTop: "1rem",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} ArtConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
