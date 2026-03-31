import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import ProcessAccordion from "@/components/ProcessAccordion";
import AboutAccordion from "@/components/AboutAccordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Results />
      <ProcessAccordion />
      <AboutAccordion />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
