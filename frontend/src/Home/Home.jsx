import AboutSection from "./AboutSection";
import Footer from "./Footer";
import GalleryPreview from "./GalleryPreview";
import Main from "./Main";
import Navbar from "./Navbar";


function Home() {
  return (
  <>
    <Navbar/>
    <Main/>
    <GalleryPreview/>
    <AboutSection/>
    <Footer/>
    </>
  );
}

export default Home;
