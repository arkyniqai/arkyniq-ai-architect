import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const metrics = [
  { icon: Clock, value: "70%", label: "Time Saved", color: "text-primary" },
  { icon: DollarSign, value: "40%", label: "Cost Reduced", color: "text-secondary" },
  { icon: CheckCircle2, value: "95%", label: "Accuracy Improved", color: "text-primary" },
  { icon: TrendingUp, value: "24/7", label: "Availability", color: "text-secondary" }
];

const comparisonData = [
  {
    type: "Voice Receptionist",
    before: "3-5 min calls, 15-20% missed",
    after: "<1 min calls, <2% missed",
    improvement: "70% faster"
  },
  {
    type: "Chat Assistant",
    before: "30-60 min response time",
    after: "Instant 24/7 responses",
    improvement: "80% faster"
  },
  {
    type: "Sales Agent",
    before: "20-30% conversion rate",
    after: "50-60% conversion rate",
    improvement: "2x conversion"
  },
  {
    type: "Support Agent",
    before: "1-2 hour resolution",
    after: "Instant resolution 24/7",
    improvement: "65% faster"
  },
];

const ResultsScrollable = () => {
  return (
    <section id="results" className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Proven <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from AI implementations
          </p>
        </div>

        {/* Horizontal Scrollable Metrics */}
        <ScrollArea className="w-full whitespace-nowrap pb-4 mb-8">
          <div className="flex gap-4 px-2">
            {metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan text-center inline-block w-[140px] md:w-[160px] animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <p className={`text-3xl font-heading font-bold ${metric.color} mb-1`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-normal">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>

        {/* Tabs for Before/After Comparison */}
        <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full grid grid-cols-2 h-auto p-1 bg-muted/30">
              <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
              <TabsTrigger value="details" className="text-sm">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-4 space-y-3 m-0">
              <h3 className="text-lg font-heading font-semibold text-center mb-4">Before vs After AI</h3>
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-muted/20 rounded-lg p-3 space-y-2">
                  <h4 className="font-medium text-sm text-primary">{item.type}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground mb-1">Before</p>
                      <p className="text-foreground/80">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">After</p>
                      <p className="text-foreground">{item.after}</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {item.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="details" className="p-4 m-0">
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-heading font-semibold">Full Comparison Table</h3>
                  <p className="text-xs text-muted-foreground">Comprehensive before and after metrics</p>
                </div>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-xs">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="text-left p-2 font-heading">Agent</th>
                        <th className="text-left p-2 font-heading">Before</th>
                        <th className="text-left p-2 font-heading">After</th>
                        <th className="text-center p-2 font-heading">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {comparisonData.map((item, index) => (
                        <tr key={index} className="hover:bg-muted/10">
                          <td className="p-2 font-medium">{item.type}</td>
                          <td className="p-2 text-muted-foreground">{item.before}</td>
                          <td className="p-2 text-foreground">{item.after}</td>
                          <td className="p-2 text-center">
                            <span className="inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                              {item.improvement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ResultsScrollable;
