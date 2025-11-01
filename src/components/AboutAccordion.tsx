import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Shield, Zap, Users } from "lucide-react";

const credentials = [
  {
    icon: Brain,
    title: "Specialized Expertise",
    summary: "AI automation, conversational design, and workflow integration",
    description: "Our team combines deep expertise in artificial intelligence, natural language processing, and business automation. We specialize in creating intelligent agents that understand context, maintain natural conversations, and seamlessly integrate with your existing workflows. Each solution is crafted with precision to match your unique business requirements.",
  },
  {
    icon: Zap,
    title: "Proven Impact",
    summary: "Measurable results across voice, chat, and workflow automation",
    description: "We've helped businesses save thousands of hours and increase conversions significantly through intelligent automation. Our AI agents handle customer interactions 24/7, qualify leads automatically, and provide instant support. The proof is in the metrics: clients see 70% time savings, 40% cost reduction, and 95% accuracy improvements on average.",
  },
  {
    icon: Users,
    title: "Trusted Technology",
    summary: "Built on industry-leading platforms for reliability",
    description: "We leverage the best technologies available: OpenAI for advanced language models, Vapi for voice AI, n8n and Zapier for workflow automation, and Google Cloud for enterprise-grade infrastructure. This tech stack ensures your agents are reliable, scalable, and always available when your customers need them.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    summary: "Enterprise-grade security and compliance",
    description: "Your data security is our top priority. Every AI agent we build includes end-to-end encryption, strict access controls, and compliance with GDPR and other privacy regulations. We implement role-based permissions, audit logs, and secure data handling practices to protect your sensitive information and maintain customer trust.",
  },
];

const AboutAccordion = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            About <span className="gradient-text">Arkyniq AI</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 px-4">
            <p className="text-base md:text-xl text-foreground leading-relaxed">
              Arkyniq AI builds intelligent consultant agents — digital employees that talk, think, and assist like real team members.
            </p>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              From voice receptionists to sales agents and support bots — we design AI systems that act as consultants for businesses.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-accent border-none mb-8 overflow-hidden">
          <CardContent className="p-6 md:p-12 text-center">
            <h3 className="text-xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-sm md:text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              To empower businesses with always-available, always-learning AI agents that automate communication, boost efficiency, and scale operations without adding headcount.
            </p>
          </CardContent>
        </Card>

        {/* Expandable Credentials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
            Why <span className="gradient-text">Trust Us</span>
          </h3>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {credentials.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-4 hover:border-primary/50 transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-elevated"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-heading font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="pl-13 pr-4">
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutAccordion;
