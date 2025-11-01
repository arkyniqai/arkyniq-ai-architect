import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PhoneCall, Lightbulb, Cpu, Plug, Rocket } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We start by understanding your business, current workflows, and automation goals. This helps us identify exactly where an AI agent can make the biggest impact.",
    details: [
      "Analyze your current processes",
      "Identify automation opportunities",
      "Define success metrics",
      "Discuss timeline and budget"
    ]
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Design",
    description: "Our team designs a custom AI strategy tailored to your needs, mapping out agent capabilities, conversation flows, and integration points.",
    details: [
      "Create detailed agent blueprints",
      "Design conversation flows",
      "Plan system integrations",
      "Define personality and brand voice"
    ]
  },
  {
    icon: Cpu,
    title: "Agent Development",
    description: "We build and train your custom AI agent using cutting-edge technology, ensuring it understands your business context and can handle complex interactions.",
    details: [
      "Develop AI models",
      "Train on your data",
      "Implement voice/chat capabilities",
      "Create custom workflows"
    ]
  },
  {
    icon: Plug,
    title: "Integration & Testing",
    description: "Connect your agent to existing tools like CRM, calendar, and messaging platforms. We rigorously test all scenarios to ensure reliability.",
    details: [
      "Integrate with your tech stack",
      "Connect communication channels",
      "Conduct extensive testing",
      "Train your team"
    ]
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Deploy your agent to production and continuously monitor performance. We refine responses based on real interactions to improve accuracy over time.",
    details: [
      "Smooth production deployment",
      "Monitor performance metrics",
      "Gather user feedback",
      "Continuous improvements"
    ]
  },
];

const ProcessAccordion = () => {
  return (
    <section id="process" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to automation in 5 steps
          </p>
        </div>

        {/* Accordion Process Steps */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {steps.map((step, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-4 hover:border-primary/50 transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-glow-cyan"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-heading font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 hidden md:block">
                        {step.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="pl-16 space-y-4">
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary">Key Activities:</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Process Tagline */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-muted-foreground italic">
            "Seamless deployment with continuous learning and optimization"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordion;
