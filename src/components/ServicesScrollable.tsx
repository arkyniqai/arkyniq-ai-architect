import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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

const ServicesScrollable = () => {
  return (
    <section id="services" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized AI agents for every business need
          </p>
        </div>

        {/* Horizontal Scrollable Services */}
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex gap-4 px-2">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated inline-block w-[280px] md:w-[320px] animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors whitespace-normal">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground whitespace-normal">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs whitespace-normal">
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>

        {/* Swipe indicator for mobile */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
            <span>Swipe to explore</span>
            <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesScrollable;
