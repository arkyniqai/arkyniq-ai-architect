import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Shield, Zap, Users } from "lucide-react";

const credentials = [
  {
    icon: Brain,
    title: "Specialized Expertise",
    description: "Our team blends AI automation, conversational design, and workflow integration to build high-performance agents.",
  },
  {
    icon: Zap,
    title: "Proven Impact",
    description: "AI voice, chat, and workflow agents that help brands save time, increase conversions, and deliver seamless experiences.",
  },
  {
    icon: Users,
    title: "Trusted Technology",
    description: "Built on OpenAI, Vapi, n8n, Zapier, and Google Cloud for top-tier reliability and scalability.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Every agent is designed with data encryption, access control, and GDPR-aligned standards.",
  },
];

const AboutAccordion = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            About <span className="gradient-text">Arkyniq AI</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            <p className="text-base md:text-xl text-foreground leading-relaxed">
              Arkyniq AI is an agency that builds intelligent AI consultant agents — digital employees that talk, think, 
              and assist like real team members.
            </p>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              From voice receptionists that answer calls to sales agents that qualify leads and customer support bots 
              that handle FAQs — we design AI systems that act as consultants and assistants for businesses.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-accent border-none mb-8 md:mb-16 overflow-hidden mx-4 md:mx-0">
          <CardContent className="p-6 md:p-12 text-center">
            <h3 className="text-xl md:text-3xl font-heading font-bold text-primary-foreground mb-3 md:mb-4">
              Our Mission
            </h3>
            <p className="text-sm md:text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              To empower businesses with always-available, always-learning AI agents that automate communication, 
              boost efficiency, and scale operations without adding headcount.
            </p>
          </CardContent>
        </Card>

        {/* Credibility - Mobile Accordion */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6 md:mb-12">
            Why <span className="gradient-text">Trust Us</span>
          </h3>
          
          {/* Mobile Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="space-y-3">
              {credentials.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`credential-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-base">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed pl-13">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Desktop Grid (unchanged) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((item, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAccordion;
