import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      </div>

      {/* Hero Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="AI Automation Technology" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-8 animate-slide-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="gradient-text">AI-Powered Business Automation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-7xl font-heading font-bold leading-tight">
            Build Intelligent Agents That{" "}
            <span className="gradient-text">Think, Talk & Act</span>{" "}
            Like Your Best Team
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">Arkyniq AI builds intelligent consultancy agents that automate workflows and elevate customer experience —from virtual executive assistants to AI sales advisors.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 text-base md:text-lg rounded-xl shadow-glow-cyan hover-glow-cyan w-full sm:w-auto" onClick={scrollToContact}>
              Automate Your Business
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-6 py-5 text-base md:text-lg rounded-xl w-full sm:w-auto" onClick={scrollToContact}>
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
              <span>No Code Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
              <span>Scalable Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default Hero;