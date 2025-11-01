import { Mail, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold gradient-text">
              Arkyniq AI
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building intelligent AI consultant agents that automate workflows and elevate business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </a>
              <a href="#results" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Results
              </a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Process
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Connect With Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">arkyniq.ai@gmail.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="Email">
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Arkyniq AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;