import HeroSection from "./components/HeroSection/HeroSection";
import SocialProof from "./components/SocialProof/SocialProof";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Support from "./components/Support/Support";
import Trial from "./components/Trial/Trial";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <HeroSection />
      </header>
      <SocialProof />
      <Features />
      <Testimonials />
      <Support />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
