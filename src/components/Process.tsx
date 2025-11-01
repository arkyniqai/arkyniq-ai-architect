import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Lightbulb, Cpu, Plug, Rocket } from "lucide-react";
const steps = [{
  icon: PhoneCall,
  title: "Discovery Call",
  description: "Understand your business, workflows, and goals"
}, {
  icon: Lightbulb,
  title: "AI Strategy & Design",
  description: "Identify where an AI agent can create the most impact"
}, {
  icon: Cpu,
  title: "Agent Development",
  description: "Build and train your custom AI agent (voice, chat, or workflow)"
}, {
  icon: Plug,
  title: "Integration & Testing",
  description: "Connect to your tools (CRM, calendar, WhatsApp) and test real interactions"
}, {
  icon: Rocket,
  title: "Launch & Optimization",
  description: "Deploy your agent and continuously refine for accuracy and performance"
}];
const Process = () => {
  return <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From idea to automation — we design, build, and deploy intelligent AI agents and systems tailored to your business</p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (hidden on last item) */}
                  {index < steps.length - 1 && <div className="hidden md:block absolute left-[4.5rem] top-24 w-0.5 h-16 bg-primary/30"></div>}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Process Tagline */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            "Seamless deployment with continuous learning and optimization"
          </p>
        </div>
      </div>
    </section>;
};
export default Process;