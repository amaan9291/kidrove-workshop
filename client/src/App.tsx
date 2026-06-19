import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearningOutcomes from "./components/LearningOutcomes";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkshopDetails from "./components/WorkshopDetails";

function App() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <WhyChooseUs />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </main>
  );
}

export default App;