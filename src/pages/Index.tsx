import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Results />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
