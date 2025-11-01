import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesScrollable from "@/components/ServicesScrollable";
import ResultsScrollable from "@/components/ResultsScrollable";
import ProcessAccordion from "@/components/ProcessAccordion";
import AboutAccordion from "@/components/AboutAccordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesScrollable />
      <ResultsScrollable />
      <ProcessAccordion />
      <AboutAccordion />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
