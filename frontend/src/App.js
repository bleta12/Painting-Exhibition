import { useState } from "react";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import GalleryPreview from "./GalleryPreview";
import Main from "./Main";
import Navbar from "./Navbar";
import Reviews from "./Reviews";

function App() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      <Navbar onReviewsClick={() => setShowReviews(true)} />
      {!showReviews ? (
        <>
          <Main />
          <GalleryPreview />
          <AboutSection />
        </>
      ) : (
        <Reviews />
      )}
      <Footer />
    </>
  );
}

export default App;
