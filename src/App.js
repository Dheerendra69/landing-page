import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularEvents from "./components/PopularEvents";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Features />
      <PopularEvents />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
