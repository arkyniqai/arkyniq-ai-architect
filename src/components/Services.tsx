import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, UserCheck, HeadphonesIcon, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Receptionist",
    description: "Answers calls, handles FAQs, books appointments",
    features: ["24/7 call handling", "Natural conversations", "Appointment scheduling", "Multi-language support"]
  },
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Replies to customer messages on Instagram, WhatsApp, or website",
    features: ["Instant responses", "Cross-platform support", "Brand voice consistency", "Unlimited conversations"]
  },
  {
    icon: UserCheck,
    title: "AI Sales Agent",
    description: "Qualifies leads, sends follow-ups, collects customer data",
    features: ["Lead qualification", "Automated follow-ups", "CRM integration", "Conversion optimization"]
  },
  {
    icon: HeadphonesIcon,
    title: "AI Support Agent",
    description: "Handles customer complaints, FAQs, order updates",
    features: ["Instant issue resolution", "Order tracking", "FAQ automation", "Escalation management"]
  },
  {
    icon: TrendingUp,
    title: "AI Business Consultant",
    description: "Provides insights, reports, or guidance using company data",
    features: ["Real-time analytics", "Custom reporting", "Strategic recommendations", "Data-driven insights"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Our <span className="gradient-text">AI Agent Solutions</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Specialized AI agents designed to automate every aspect of your business operations
          </p>
        </div>

        {/* Services - Mobile Horizontal Scroll, Desktop Grid */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex md:flex-none overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-0 pb-4 scrollbar-thin">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated md:hover:-translate-y-2 min-w-[85vw] md:min-w-0 snap-center flex-shrink-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
