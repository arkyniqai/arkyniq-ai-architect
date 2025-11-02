import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, CheckCircle2 } from "lucide-react";
const metrics = [{
  icon: Clock,
  value: "70%",
  label: "Time Saved",
  color: "text-primary"
}, {
  icon: DollarSign,
  value: "40%",
  label: "Cost Reduced",
  color: "text-secondary"
}, {
  icon: CheckCircle2,
  value: "95%",
  label: "Accuracy Improved",
  color: "text-primary"
}, {
  icon: TrendingUp,
  value: "24/7",
  label: "Availability",
  color: "text-secondary"
}];
const Results = () => {
  return <section id="results" className="py-12 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Proven <span className="gradient-text">Impact Metrics</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">Real results from businesses that deployed AI Systems with Arkyniq</p>
        </div>

        {/* Metrics - Mobile Horizontal Scroll, Desktop Grid */}
        <div className="lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 md:gap-6 flex lg:flex-none overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-0 pb-4 mb-8 md:mb-16 scrollbar-thin">
          {metrics.map((metric, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan text-center min-w-[70vw] sm:min-w-0 snap-center flex-shrink-0 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className={`text-4xl font-heading font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </p>
                <p className="text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Comparison Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden mx-4 md:mx-0">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-heading text-center">Before vs After AI Implementation</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-2 md:p-4 font-heading text-xs md:text-sm">Agent Type</th>
                    <th className="text-left p-2 md:p-4 font-heading text-xs md:text-sm">Before (Manual)</th>
                    <th className="text-left p-2 md:p-4 font-heading text-xs md:text-sm">After (AI)</th>
                    <th className="text-center p-2 md:p-4 font-heading text-xs md:text-sm">Improvement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Voice Receptionist</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground">3-5 min calls, 15-20% missed</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-foreground">&lt;1 min calls, &lt;2% missed</td>
                    <td className="p-2 md:p-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        70% faster
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Chat Assistant</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground">30-60 min response time</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-foreground">Instant 24/7 responses</td>
                    <td className="p-2 md:p-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        80% faster
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Sales Agent</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground">20-30% conversion rate</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-foreground">50-60% conversion rate</td>
                    <td className="p-2 md:p-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        2x conversion
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Support Agent</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground">1-2 hour resolution</td>
                    <td className="p-2 md:p-4 text-xs md:text-sm text-foreground">Instant resolution 24/7</td>
                    <td className="p-2 md:p-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        65% faster
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Results;